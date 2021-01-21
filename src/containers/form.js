import { useContext } from 'react';
import { Form } from '../components/';
import { FORM_SETTINGS } from '../constants/form_settings';
import { settingsContext } from '../contexts/settings';
import ReactTooltip from 'react-tooltip';

const FormContainer = () => {
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
    <Form>
      <Form.Title>Settings</Form.Title>
      <Form.Base onSubmit={handleSubmit}>
        <Form.Label htmlFor="rounds">
          <Form.LabelHead>Rounds</Form.LabelHead>
          <Form.Select
            onChange={({ target }) => setRounds(parseInt(target.value))}
            name="rounds"
            value={rounds}
          >
            {FORM_SETTINGS.rounds.map((option) => (
              <Form.Option key={option} value={option}>
                {option}
              </Form.Option>
            ))}
          </Form.Select>
        </Form.Label>

        <Form.Label htmlFor="pitchNotation">
          <Form.LabelHead>Pitch Notation</Form.LabelHead>
          <Form.Select
            onChange={({ target }) => setPitchNotation(target.value)}
            value={pitchNotation}
            name="pitchNotation"
          >
            {Object.keys(FORM_SETTINGS.pitchNotation).map((option) => (
              <Form.Option key={option} value={option}>
                {FORM_SETTINGS.pitchNotation[option]}
              </Form.Option>
            ))}
          </Form.Select>
        </Form.Label>
        <Form.Label>
          <Form.Text>
            <Form.Input
              name={'commonWords'}
              onChange={({ target }) => setCommonWords(target.checked)}
              checked={commonWords}
              type="checkbox"
            />
            Only{' '}
            <Form.Tooltip data-tip="From the 20k most frequent words on Wikipedia">
              Common
            </Form.Tooltip>{' '}
            Words
          </Form.Text>
        </Form.Label>
        <Form.Link to="/play">
          <Form.Submit>START</Form.Submit>
        </Form.Link>
      </Form.Base>
    </Form>
  );
};

export default FormContainer;
