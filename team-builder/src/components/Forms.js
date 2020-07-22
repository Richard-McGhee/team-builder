import React, { useState } from 'react';

export default function Forms() {
    
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
    <form>
        <input
        placeholder='testing'
        type='text'
        />
    </form>
  );
}