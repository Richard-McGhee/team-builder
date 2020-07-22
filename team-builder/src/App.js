import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ teamData, setTeamData ] = useState({
    devName:'',
    devEmail:'',
    devRole:''
  })
  const onValueChange = evt => {
    setTeamData({
      ...teamData,
      [ evt.target.name]: evt.target.value
    })
  }
  const onFormSubmit = evt => {
    evt.preventDefault()
    alert(`Here's your team: ${teamData}!`)
  }

  return (
    <h1>Working</h1>
  );
}

export default App;
