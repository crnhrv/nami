import useGame from '../hooks/game';
import { useEffect } from 'react';
import { Loading } from '../components';
import { Game } from '../components/';

const GameContainer = ({ children }) => {
  const {
    score,
    loading,
    currentWord,
    currentRound,
    rounds,
    incrementScore,
    pitchNotation,
    decrementStartTimer,
    startTimer,
    newQuestion,
    failedQuestion,
    roundOver,
    setLoading,
    gameOver,
    wordBank,
    startGame,
  } = useGame();

  useEffect(() => {
    if (!loading && startTimer === 3) {
      setTimeout(() => decrementStartTimer(), 1000);
    }
  }, [startTimer, loading]);

  useEffect(() => {
    if (currentWord?.url) {
      setLoading(false);
    }
  }, [currentWord]);

  useEffect(() => {
    if (gameOver) {
      setLoading(false);
    }
  }, [gameOver]);

  useEffect(() => {
    if (roundOver) {
      newQuestion();
    }
  }, [roundOver]);

  return (
    <>
      {loading ? (
        <Loading.Spinner />
      ) : startTimer >= 1 ? (
        <Game.Timer>{startTimer}</Game.Timer>
      ) : currentWord?.url ? (
        <Game>
          {/* <Game.TitleInfo roundOver={roundOver} correct={correctAnswer} ></Game.TitleInfo> */}
          <Game.Score>
            <Game.Text>
              Round: {currentRound} / {rounds}
            </Game.Text>
            <Game.Text>Score: {score}</Game.Text>
          </Game.Score>
          <Game.Audio controls audio={currentWord.audio} />
          <Game.Choices
            notation={pitchNotation}
            incrementScore={incrementScore}
            word={currentWord}
            failedQuestion={failedQuestion}
            newQuestion={newQuestion}
            pitch={currentWord.pitch}
          ></Game.Choices>
        </Game>
      ) : (
        <Game.GameOver words={wordBank} restartGame={startGame} />
      )}
    </>
  );
};

export default GameContainer;
