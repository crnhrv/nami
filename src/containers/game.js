import useGame from '../hooks/game';
import { useState, useEffect, useContext } from 'react';
import { Loading } from '../components';
import { Game } from '../components/';
import { settingsContext } from '../contexts/settings';

const GameContainer = ({ children }) => {
  const {
    score,
    loading,
    count,
    audio,
    pitch,
    answer,
    setAnswer,
    setLoading,
    setScore,
  } = useGame();

  useEffect(() => {
    if (audio.url) {
      setLoading(false);
    }
  }, [audio]);

  const { pitchNotation } = useContext(settingsContext);

  return (
    <>
      {loading && <Loading.Spinner />}
      {count >= 1 ? (
        <Game.Timer>{count}</Game.Timer>
      ) : audio.url ? (
        <Game>
          <Game.Score>Score: {score}</Game.Score>
          <Game.Audio controls audio={audio} />
          <Game.Choices
            notation={pitchNotation}
            answer={answer}
            setAnswer={setAnswer}
            pitch={pitch}
          ></Game.Choices>
        </Game>
      ) : (
        loading && <Loading.Spinner />
      )}
    </>
  );
};

export default GameContainer;
