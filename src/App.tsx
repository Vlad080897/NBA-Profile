import React, { useState } from 'react';
import './App.css';
import ListOfTeams from './components/List/ListOfTeams';
import { ListOfPlayers } from './components/Players/ListOfPlayers';
import SearchForm, { IValuesFormType } from './components/Team-Form/Team-Form';
import Title from './components/Title/Title';
import { TeamType } from './types/types';

const App = () => {
  const [teams, setTeams] = useState<Array<TeamType>>([]);
  const handleAdd = (newTeam: IValuesFormType) => {
    const newTeams = [newTeam, ...teams];
    setTeams(newTeams);
  };
  return (
    <div className="App">
      <Title />
      <SearchForm handleAdd={handleAdd} />
      <ListOfTeams teams={teams} setTeams={setTeams} />
      <ListOfPlayers />
    </div>
  );
};

export default App;
