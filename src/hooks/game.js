import { createAudio } from '../utils/create_audio';
import { getJSONData } from '../utils/get_json_data';
import { settingsContext } from '../contexts/settings';
import { randomSample } from '../utils/random_sample';
import { useEffect, useReducer, useContext, useCallback } from 'react';
import { initialState, gameReducer } from '../reducers/game_reducer';

const useGame = () => {
  const {
    rounds,
    setRounds,
    pitchNotation,
    setPitchNotation,
    commonWords,
  } = useContext(settingsContext);

  const [
    {
      loading,
      currentRound,
      currentWord,
      score,
      color,
      loadingTimer,
      roundOver,
      wordBank,
      roundWords,
    },
    dispatch,
  ] = useReducer(gameReducer, initialState);

  const startGame = () => dispatch({ type: 'GAME_START' });

  const initWordBank = (payload) =>
    dispatch({ type: 'INITIALIZE_WORD_BANK', payload });

  const initRoundWords = (payload) =>
    dispatch({ type: 'INITIALIZE_ROUND_WORDS', payload });

  const incrementScore = () => dispatch({ type: 'INCREMENT_SCORE' });
  const setLoading = (payload) => dispatch({ type: 'SET_LOADING', payload });
  const failedQuestion = () => dispatch({ type: 'FAILED_QUESTION' });

  const newQuestion = useCallback((_) => dispatch({ type: 'NEW_QUESTION' }), [
    dispatch,
  ]);
  const decrementLoadingTimer = useCallback(
    (_) => dispatch({ type: 'DECREMENT_LOADING_TIMER' }),
    [dispatch]
  );

  useEffect(() => {
    if (roundWords.length > 0) {
      setLoading(false);
    } else if (wordBank.length > 0) {
      const words = randomSample(wordBank, rounds);
      const wordsWithAudio = words.map((o) => createAudio(o));
      initRoundWords(wordsWithAudio);
    }
  }, [roundWords, wordBank, rounds, loading]);

  useEffect(() => {
    const dict = commonWords ? 'common_dict.json' : 'dict.json';
    if (!loading & (wordBank.length === 0)) {
      setLoading(true);
      getJSONData(dict).then((data) => {
        initWordBank(data);
      });
    }
  }, [wordBank, rounds, commonWords, loading]);

  useEffect(() => {
    if (roundWords.length > 0 && loadingTimer > 0) {
      setTimeout(() => decrementLoadingTimer(), 1000);
    }
  }, [loadingTimer, roundWords, decrementLoadingTimer]);

  useEffect(() => {
    if (roundOver) {
      newQuestion();
      setTimeout(() => dispatch({ type: 'RESET_COLOR' }), 500);
    }
  }, [roundOver, newQuestion]);

  return {
    startGame,
    setRounds,
    rounds,
    currentWord,
    currentRound,
    loading,
    setLoading,
    pitchNotation,
    setPitchNotation,
    loadingTimer,
    decrementLoadingTimer,
    newQuestion,
    failedQuestion,
    score,
    color,
    incrementScore,
    roundOver,
    roundWords,
    commonWords,
  };
};

export default useGame;
