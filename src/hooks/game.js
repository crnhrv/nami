import { settingsContext } from '../contexts/settings';
import { useContext, useState, useEffect } from 'react';
import { pitchDict } from '../lib/dict_parsed';
import randomSample from '../utils/random_sample';

const loadPitch = async (rounds) => {
  const data = await randomSample(pitchDict, rounds);
  return data;
};

const DL_URL =
  'http://assets.languagepod101.com/dictionary/japanese/audiomp3.php?';

const useGame = () => {
  const {
    rounds: startingRounds,
    setRounds,
    pitchNotation,
    setPitchNotation,
  } = useContext(settingsContext);

  const [loading, setLoading] = useState(true);
  const [currentRound, setCurrentRound] = useState(startingRounds);
  const [count, setCount] = useState(3);
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(null);
  const [audio, setAudio] = useState({ url: '', obj: '' });
  const [pitch, setPitch] = useState('');
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [usedWords, setUsedWords] = useState([]);

  useEffect(() => {
    if (count === 3 && loading) {
      loadPitch(startingRounds * 10).then((data) => {
        setWords(data);
        setLoading(false);
        setCurrentWord(words[0]);
        setCurrentRound((r) => r - 1);
      });
    }

    let countID;
    let roundID;

    if (!loading && count > 0) {
      countID = setTimeout(() => setCount((c) => c - 1), 1000);
    }

    if (!currentWord && count <= 1 && currentRound > 0) {
      roundID = setTimeout(() => {
        setCurrentRound((r) => r - 1);
        setCurrentWord(words[currentRound]);
        setAudio('');
      }, 6000);
    }

    if (currentWord) {
      let [kanji, kana, pitch] = currentWord;
      if (kana.length === pitch) {
        setCurrentWord(
          words[currentRound + Math.floor(Math.random() * words.length)]
        );
      }

      if (currentWord.some((e) => e === '')) {
        kana = kanji;
      }

      if (count <= 0 && !audio.url) {
        setLoading(true);
        const candidate = new Audio(`${DL_URL}kanji=${kanji}&kana=${kana}`);
        setTimeout(() => {
          if (candidate.duration < 5) {
            setAudio({
              url: `${DL_URL}kanji=${kanji}&kana=${kana}`,
              obj: candidate,
            });
            setPitch(pitch);
            setCurrentWord('');
          } else {
            setCurrentWord(
              words[currentRound + Math.floor(Math.random() * words.length)]
            );
          }
        }, 300);
      }
    }

    if (answer !== null) {
      if (answer) {
        setScore((e) => e + 1);
      }
      setAnswer(null);
    }

    return () => {
      clearTimeout(roundID);
      clearTimeout(countID);
    };
  }, [
    startingRounds,
    score,
    answer,
    count,
    currentRound,
    loading,
    words,
    currentWord,
    audio,
  ]);

  return {
    currentRound,
    setRounds,
    pitchNotation,
    setPitchNotation,
    words,
    loading,
    setLoading,
    count,
    currentWord,
    setAudio,
    audio,
    pitch,
    answer,
    setAnswer,
    score,
    setScore,
  };
};

export default useGame;
