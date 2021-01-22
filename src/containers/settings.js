import { useContext } from 'react';
import { Settings } from '../components';
import { FORM_SETTINGS } from '../constants/form_settings';
import { settingsContext } from '../contexts/settings';

const SettingsContainer = () => {
  const {
    rounds,
    setRounds,
    pitchNotation,
    setPitchNotation,
    commonWords,
    setCommonWords,
  } = useContext(settingsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Settings>
      <Settings.Title>Settings</Settings.Title>
      <Settings.Base onSubmit={handleSubmit}>
        <Settings.Label htmlFor="rounds">
          <Settings.LabelHead>Rounds</Settings.LabelHead>
          <Settings.Select
            onChange={({ target }) => setRounds(parseInt(target.value))}
            name="rounds"
            value={rounds}
          >
            {FORM_SETTINGS.rounds.map((option) => (
              <Settings.Option key={option} value={option}>
                {option}
              </Settings.Option>
            ))}
          </Settings.Select>
        </Settings.Label>

        <Settings.Label htmlFor="pitchNotation">
          <Settings.LabelHead>Pitch Notation</Settings.LabelHead>
          <Settings.Select
            onChange={({ target }) => setPitchNotation(target.value)}
            value={pitchNotation}
            name="pitchNotation"
          >
            {Object.keys(FORM_SETTINGS.pitchNotation).map((option) => (
              <Settings.Option key={option} value={option}>
                {FORM_SETTINGS.pitchNotation[option]}
              </Settings.Option>
            ))}
          </Settings.Select>
        </Settings.Label>
        <Settings.Label>
          <Settings.Text>
            <Settings.Input
              name={'commonWords'}
              onChange={({ target }) => setCommonWords(target.checked)}
              checked={commonWords}
              type="checkbox"
            />
            Only{' '}
            <Settings.Tooltip data-tip="From the 20k most frequent words on Wikipedia">
              Common
            </Settings.Tooltip>{' '}
            Words
          </Settings.Text>
        </Settings.Label>
        <Settings.Link to="/play">
          <Settings.Submit>Start</Settings.Submit>
        </Settings.Link>
      </Settings.Base>
    </Settings>
  );
};

export default SettingsContainer;
