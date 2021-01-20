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
    newQuestion,
    failedQuestion,
    loadingTimer,
    decrementLoadingTimer,
    roundOver,
    roundWords,
    startGame,
  } = useGame();

  useEffect(() => {
    if (roundWords.length > 0 && loadingTimer > 0) {
      setTimeout(() => decrementLoadingTimer(), 1000);
    }
  }, [loadingTimer, roundWords, decrementLoadingTimer]);

  useEffect(() => {
    if (roundOver) {
      newQuestion();
    }
  }, [roundOver, newQuestion]);

  return (
    <>
      {loading || loadingTimer >= 1 ? (
        <Loading.Spinner />
      ) : currentWord?.url ? (
        <Game>
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
          ></Game.Choices>
        </Game>
      ) : (
        <Game.GameOver words={roundWords} restartGame={startGame} />
      )}
    </>
  );
};

export default GameContainer;
