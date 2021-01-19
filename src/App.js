import './App.css';
import HeaderContainer from './containers/header';
import FormContainer from './containers/form';
import GameContainer from './containers/game';
import { Switch, Route } from 'react-router-dom';
import { settingsContext } from './contexts/settings';
import { useState } from 'react';

const App = () => {
  const [rounds, setRounds] = useState(10);
  const [pitchNotation, setPitchNotation] = useState('numericFree');
  return (
    <settingsContext.Provider
      value={{ rounds, setRounds, pitchNotation, setPitchNotation }}
    >
      <HeaderContainer />
      <Switch>
        <Route exact path="/">
          <FormContainer />
        </Route>
        <Route path="/play">
          <GameContainer />
        </Route>
      </Switch>
    </settingsContext.Provider>
  );
};
export default App;
