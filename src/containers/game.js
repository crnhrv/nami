import useGame from '../hooks/game';
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
    color,
    roundWords,
    startGame,
  } = useGame();

  console.log(color);

  return (
    <>
      {loading || loadingTimer >= 1 ? (
        <Loading.Spinner />
      ) : currentWord?.url ? (
        <Game color={color}>
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
