import React, { useState } from 'react';
import './App.css';
import Forms from './components/Forms';

function App() {
  const [ fullTeam, setFullTeam ] = useState([])
  return (
    <div className='App-header'>
      <Forms fullTeam={fullTeam} setFullTeam={setFullTeam}/>
    {fullTeam.map(item => (
        <h2 key={item.devName}>`{item.devName} - {item.devEmail} - {item.devRole}`</h2>
    ))}
    </div>
  );
}

export default App;
