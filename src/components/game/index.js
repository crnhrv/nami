import {
  Container,
  Timer,
  Audio,
  Submit,
  Choices,
  Score,
  Button,
  PlayButton,
  Count,
  FlexContainer,
  Input,
  Form,
  Text,
  AccentText,
  VictoryText,
  Item,
  Title,
} from './styles/game';
import { useState, useEffect, useRef } from 'react';

const Game = ({ children, ...restProps }) => {
  return (
    <Container maxWidth="320px" di="flex" dir="column" {...restProps}>
      {children}
    </Container>
  );
};

Game.Timer = ({ children, ...restProps }) => {
  return <Timer {...restProps}>{children}</Timer>;
};

Game.Audio = function GameAudio({ audio, children, ...restProps }) {
  const [tries, setTries] = useState(2);

  useEffect(() => {
    audio.play();
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
  const pitch = parseInt(word.pitch);
  const focusRef = useRef(null);

  useEffect(() => {
    if (notation === 'numericFree') {
      focusRef.current.focus();
    }
  }, [input]);

  const handleMulti = (gata) => {
    if ((gata === '平板' && pitch === 0) || (gata === '頭高' && pitch === 1)) {
      incrementScore();
    } else if (gata === '中高' && (pitch !== 0 || pitch !== 1)) {
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
    if (parseInt(input) === pitch) {
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
          <Input
            ref={focusRef}
            type="text"
            value={input}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </Form>
      );
      break;
    case 'gataMulti':
      type = GATA.map((gata) => (
        <Button key={gata} onClick={() => handleMulti(gata)}>
          {gata}
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

Game.Submit = function GameSubmit({ pitch, children, ...restProps }) {
  return (
    <Submit pitch {...restProps}>
      {children}
    </Submit>
  );
};

Game.Score = function GameScore({ pitch, children, ...restProps }) {
  return <Score {...restProps}>{children}</Score>;
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

  const wordbank = words
    .map((word, idx) => {
      return (
        <Item key={word.url}>
          <AccentText>Round {words.length - idx}:</AccentText>
          <VictoryText passed={word.passed}>{word.kanji}</VictoryText>
        </Item>
      );
    })
    .reverse();
  return (
    <Container maxWidth="720px" di="grid" dir="column" {...restProps}>
      <Title>How You Did</Title>
      {wordbank}
      {children}
      <Button onClick={handleClick}>Play Again?</Button>
    </Container>
  );
};

Game.Text = function GameText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

export default Game;
