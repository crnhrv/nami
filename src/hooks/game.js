import { createAudio } from '../utils/create_audio';
import { getJSONData } from '../utils/get_json_data';
import { settingsContext } from '../contexts/settings';
import { randomSample } from '../utils/random_sample';
import { useEffect, useReducer, useContext } from 'react';
import { initialState, gameReducer } from '../reducers/game_reducer';

const useGame = () => {
  const { rounds: startingRounds, pitchNotation: startingPitch } = useContext(
    settingsContext
  );

  initialState.rounds = startingRounds;
  initialState.pitchNotation = startingPitch;

  const [
    {
      loading,
      currentRound,
      rounds,
      currentWord,
      gameOver,
      score,
      startTimer,
      gameTimer,
      roundOver,
      pitchNotation,
      correctAnswer,
      wordBank,
    },
    dispatch,
  ] = useReducer(gameReducer, initialState);

  const startGame = () => dispatch({ type: 'GAME_START' });
  const initWordBank = (payload) =>
    dispatch({ type: 'INITIALIZE_WORD_BANK', payload });
  const newQuestion = () => dispatch({ type: 'NEW_QUESTION' });
  const incrementScore = () => dispatch({ type: 'INCREMENT_SCORE' });
  const decrementGameTimer = () => dispatch({ type: 'GAME_TIMER_DOWN' });
  const decrementStartTimer = () => dispatch({ type: 'DECREMENT_START_TIMER' });
  const setLoading = (payload) => dispatch({ type: 'SET_LOADING', payload });
  const setPitchNotation = (payload) =>
    dispatch({ type: 'CHANGE_PITCH_SETTING', payload });
  const setRounds = (payload) =>
    dispatch({ type: 'CHANGE_ROUNDS_SETTING', payload: parseInt(payload) });
  const failedQuestion = () => dispatch({ type: 'FAILED_QUESTION' });

  useEffect(() => {
    if (!rounds) {
      setRounds(startingRounds);
    }
    setLoading();
    if (wordBank.length === 0) {
      getJSONData('dict.json')
        .then((data) => randomSample(data, rounds))
        .then((objects) => objects.map((o) => createAudio(o)))
        .then((audio) => initWordBank(audio));
    }
  }, [rounds, wordBank, startingRounds]);

  return {
    setRounds,
    rounds,
    currentWord,
    currentRound,
    loading,
    setLoading,
    pitchNotation,
    startTimer,
    decrementStartTimer,
    gameTimer,
    decrementGameTimer,
    setPitchNotation,
    startGame,
    newQuestion,
    score,
    incrementScore,
    failedQuestion,
    gameOver,
    roundOver,
    wordBank,
    correctAnswer,
  };
};

export default useGame;
