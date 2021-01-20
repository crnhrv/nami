import { GAME_SETTINGS } from '../constants/game_settings';

export const initialState = {
  loading: false,
  loadingTimer: GAME_SETTINGS.loadingTimer,
  wordBank: [],
  roundWords: [],
  currentWord: {},
  score: 0,
  currentRound: 0,
  roundOver: false,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case 'INITIALIZE_WORD_BANK': {
      return {
        ...state,
        wordBank: action.payload,
      };
    }
    case 'INITIALIZE_ROUND_WORDS': {
      return {
        ...state,
        roundWords: action.payload,
        loading: false,
        currentWord: action.payload[state.currentRound],
      };
    }
    case 'GAME_START': {
      return {
        ...state,
        loading: false,
        roundOver: false,
        score: 0,
        loadingTimer: GAME_SETTINGS.loadingTimer,
        currentRound: 0,
        roundWords: [],
      };
    }
    case 'NEW_QUESTION': {
      if (state.currentRound === state.roundWords.length - 1) {
        return { ...state, loading: false, currentWord: null };
      }
      return {
        ...state,
        roundOver: false,
        currentRound: state.currentRound + 1,
        currentWord: state.roundWords[state.currentRound + 1],
      };
    }
    case 'INCREMENT_SCORE': {
      const newRoundWords = state.roundWords.filter(
        (word) => word.url !== state.currentWord.url
      );
      return {
        ...state,
        score: state.score + 1,
        roundOver: true,
        roundWords: [{ ...state.currentWord, passed: true }, ...newRoundWords],
      };
    }
    case 'DECREMENT_LOADING_TIMER': {
      if (state.loadingTimer <= 0) {
        return state;
      } else {
        return {
          ...state,
          loadingTimer: state.loadingTimer - 1,
          loading: false,
        };
      }
    }
    case 'FAILED_QUESTION': {
      const newRoundWords = state.roundWords.filter(
        (word) => word.url !== state.currentWord.url
      );
      return {
        ...state,
        roundOver: true,
        roundWords: [{ ...state.currentWord, passed: false }, ...newRoundWords],
      };
    }
    default: {
      return state;
    }
  }
};
