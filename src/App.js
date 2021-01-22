import { Home, Play } from './pages/';
import { Switch, Route } from 'react-router-dom';
import { settingsContext } from './contexts/settings';
import { GAME_SETTINGS } from './constants/game_settings';
import { useState } from 'react';

const App = () => {
  const [rounds, setRounds] = useState(10);
  const [pitchNotation, setPitchNotation] = useState(
    GAME_SETTINGS.pitchNotation
  );
  const [commonWords, setCommonWords] = useState(GAME_SETTINGS.commonWords);

  return (
    <settingsContext.Provider
      value={{
        rounds,
        setRounds,
        pitchNotation,
        setPitchNotation,
        commonWords,
        setCommonWords,
      }}
    >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/play">
          <Play />
        </Route>
      </Switch>
    </settingsContext.Provider>
  );
};
export default App;
