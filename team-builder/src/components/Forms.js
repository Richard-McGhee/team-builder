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
    <form onSubmit={onFormSubmit}>
        <input
        id='devNameId'
        name='devName'
        placeholder='Give us a name'
        type='text'
        onChange={onValueChange}
        /><br/>

        <input
        id='devEmailId'
        name='devEmail'
        placeholder='Your Email?'
        type='text'
        onChange={onValueChange}
        /><br/>

        <input
        id='devRoleId'
        name='devRole'
        placeholder='What do you do?'
        type='text'
        onChange={onValueChange}
        /><br/>

        <input
        id='devSubmitId'
        name='devSubmit'
        type='submit'
        />
    </form>
  );
}