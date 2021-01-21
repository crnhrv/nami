import {
  Container,
  Audio,
  Choices,
  Score,
  Button,
  PlayButton,
  Count,
  FlexContainer,
  Input,
  Form,
  Text,
  Title,
  AccentText,
  VictoryText,
  Item,
} from './styles/game';
import { useState, useEffect, useRef } from 'react';

const Game = ({ children, ...restProps }) => {
  return (
    <Container maxWidth="360px" di="flex" dir="column" {...restProps}>
      {children}
    </Container>
  );
};

Game.Score = function GameScore({ pitch, children, ...restProps }) {
  return <Score {...restProps}>{children}</Score>;
};

Game.Text = function GameText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Game.Audio = function GameAudio({ audio, children, ...restProps }) {
  const [tries, setTries] = useState(2);

  useEffect(() => {
    audio.play();
    setTries(2);
  }, [audio]);

  const handleClick = (e) => {
    e.preventDefault();
    if (tries > -11) {
      audio.play();
    }

    setTries((e) => e - 1);
  };

  return (
    <Audio {...restProps}>
      <FlexContainer>
        {tries > 0 && (
          <>
            <Count>{tries} Plays</Count>
            <PlayButton onClick={handleClick}></PlayButton>
          </>
        )}
      </FlexContainer>
      {children}
    </Audio>
  );
};

Game.Choices = function GameChoices({
  word,
  notation,
  incrementScore,
  failedQuestion,
  children,
  newQuestion,
  ...restProps
}) {
  const [input, setInput] = useState('');
  const focusRefInput = useRef(null);

  useEffect(() => {
    if (notation === 'numericFree') {
      focusRefInput.current.focus();
    }
  }, [input, notation]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  const handleKeyPress = (e) => {
    if (notation === 'numericFree') {
      return;
    }
    let key = e.key;
    if (notation === 'gataMulti') {
      if (e.key === '1') {
        key = '頭高';
      } else if (e.key === '2') {
        key = '中高';
      } else if (e.key === '3') {
        key = '平板';
      } else {
        return;
      }
      return handleMultiGata(key);
    } else if (key === '0') {
      key = '平板';
    } else if (key === '1') {
      key = '頭高';
    }

    if (word.pitchChoices.includes(key)) {
      return handleMultiNum(key);
    }
  };

  const handleMultiGata = (gata) => {
    if (gata === word.pitchType) {
      incrementScore();
    } else {
      failedQuestion();
    }
  };

  const handleMultiNum = (pitch) => {
    if (pitch === '平板') {
      pitch = '0';
    } else if (pitch === '頭高') {
      pitch = '1';
    }
    if (pitch === word.pitch) {
      incrementScore();
    } else {
      failedQuestion();
    }
  };

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInput('');
    if (input === word.pitch) {
      incrementScore(true);
    } else {
      failedQuestion();
    }
  };
  const GATA = ['頭高', '中高', '平板'];
  let type;

  switch (notation) {
    case 'numericFree':
      type = (
        <Form onSubmit={handleInput} dir="column">
          <Input ref={focusRefInput} value={input} onChange={handleChange} />
          <Button type="submit">Submit</Button>
        </Form>
      );
      break;
    case 'gataMulti':
      type = GATA.map((gata) => (
        <Button key={gata} onClick={() => handleMultiGata(gata)}>
          {gata}
        </Button>
      ));
      break;
    case 'numericMulti':
      type = word.pitchChoices.map((pitch) => (
        <Button size="small" key={pitch} onClick={() => handleMultiNum(pitch)}>
          {pitch}
        </Button>
      ));
      break;
    default:
      break;
  }

  return (
    <Choices {...restProps}>
      {type}
      {children}
    </Choices>
  );
};

Game.GameOver = function GameOver({
  restartGame,
  words,
  children,
  ...restProps
}) {
  const handleClick = (e) => {
    e.preventDefault();
    restartGame();
  };

  const roundWords = words
    .map((word, idx) => {
      return (
        <Item key={word.url}>
          <AccentText>Round {words.length - idx}:</AccentText>
          <VictoryText onClick={() => word.audio.play()} passed={word.passed}>
            {word.kanji} <AccentText>[{word.pitch}]</AccentText>
          </VictoryText>
        </Item>
      );
    })
    .reverse();
  return (
    <Container maxWidth="720px" di="grid" dir="column" {...restProps}>
      <Title>How You Did</Title>
      {roundWords}
      {children}
      <Button onClick={handleClick}>Play Again?</Button>
    </Container>
  );
};

export default Game;
