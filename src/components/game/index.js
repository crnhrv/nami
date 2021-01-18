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
  Label,
} from './styles/game';
import { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../contexts/game';
import useGame from '../../hooks/game';

const Game = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Game.Timer = ({ children, ...restProps }) => {
  return <Timer {...restProps}>{children}</Timer>;
};

Game.Audio = function GameAudio({ audio, children, ...restProps }) {
  const [tries, setTries] = useState(2);

  useEffect(() => {
    audio.obj.play();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (tries > -11) {
      audio.obj.play();
    }

    setTries((e) => e - 1);
  };

  return (
    <Audio {...restProps}>
      <FlexContainer>
        <Count>Remaining: {tries}</Count>
        <PlayButton onClick={handleClick}></PlayButton>
      </FlexContainer>
      {children}
    </Audio>
  );
};

Game.Choices = function GameChoices({
  pitch,
  notation,
  children,
  setAnswer,
  ...restProps
}) {
  const [input, setInput] = useState('');

  const handleMulti = (gata) => {
    if ((gata === '平板' && pitch === 0) || (gata === '頭高' && pitch === 1)) {
      setAnswer(true);
    } else if (gata === '中高' && (pitch !== 0 || pitch !== 1)) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleInput = (e) => {
    e.preventDefault();
    console.log(input, pitch);
    if (input === pitch) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const GATA = ['頭高', '中高', '平板'];
  let type;

  switch (notation) {
    case 'numericFree':
      type = (
        <Form onSubmit={handleInput} dir="column">
          <Input type="text" value={input} onChange={handleChange} />
          <Button type="submit">Submit Answer</Button>
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

export default Game;
