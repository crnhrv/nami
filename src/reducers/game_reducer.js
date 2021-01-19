export const initialState = {
  loading: false,
  gameTimer: 6,
  startTimer: 3,
  wordBank: [],
  currentWord: {},
  score: 0,
  rounds: 0,
  currentRound: 0,
  gameOver: false,
  roundOver: false,
  pitchNotation: 'numericFree',
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
        loading: false,
        currentWord: action.payload[state.currentRound],
      };
    }
    case 'GAME_START': {
      return {
        ...state,
        gameOver: false,
        loading: false,
        roundOver: false,
        startTimer: 3,
        currentRound: 0,
        rounds: 0,
      };
    }
    case 'NEW_QUESTION': {
      if (state.currentRound === state.rounds - 1) {
        return { ...state, loading: false, gameOver: true, currentWord: null };
      }
      return {
        ...state,
        correctAnswer: false,
        roundOver: false,
        currentRound: state.currentRound + 1,
        currentWord: state.wordBank[state.currentRound + 1],
        loading: true,
      };
    }
    case 'INCREMENT_SCORE': {
      const newWordBank = state.wordBank.filter(
        (word) => word.url !== state.currentWord.url
      );
      return {
        ...state,
        score: state.score + 1,
        roundOver: true,
        wordBank: [{ ...state.currentWord, passed: true }, ...newWordBank],
      };
    }
    case 'FAILED_QUESTION': {
      const newWordBank = state.wordBank.filter(
        (word) => word.url !== state.currentWord.url
      );
      return {
        ...state,
        roundOver: true,
        wordBank: [{ ...state.currentWord, passed: false }, ...newWordBank],
      };
    }
    case 'DECREMENT_GAME_TIMER': {
      if (state.gameTimer <= 0) {
        return state;
      } else if (state.gameTimer === 1) {
        return {
          ...state,
          startTimer: state.gameTimer - 1,
          roundOver: true,
        };
      } else {
        return {
          ...state,
          gameTimer: state.gameTimer - 1,
        };
      }
    }
    case 'DECREMENT_START_TIMER': {
      if (state.startTimer <= 0) {
        return state;
      } else {
        return {
          ...state,
          startTimer: state.startTimer - 1,
        };
      }
    }
    case 'CHANGE_PITCH_SETTING': {
      return {
        ...state,
        pitchNotation: action.payload,
      };
    }
    case 'CHANGE_ROUNDS_SETTING': {
      return {
        ...state,
        rounds: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
