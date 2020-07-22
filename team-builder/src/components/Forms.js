import React, { useState } from 'react';

export default function Forms() {
  const [ fullTeam, setFullTeam ] = useState([]) 
  const [ teamMember, setTeamMember ] = useState({
    devName:'',
    devEmail:'',
    devRole:''
  })
  const onValueChange = evt => {
    setTeamMember({
      ...teamMember,
      [ evt.target.name]: evt.target.value
    })
    
  }
  const listTeam = fullTeam.map(item => (
      `${item.devName} - ${item.devEmail} - ${item.devRole}`
  ))
  const teamCall = () => alert(`Here's your Teammate: Name - ${teamMember.devName}, Email - ${teamMember.devEmail}, Their Role - ${teamMember.devRole}!
  This is the full team!
  Team Member:
  ${listTeam}
  --------------------------------`)
  const onFormSubmit = evt => {
    evt.preventDefault()
    setFullTeam([...fullTeam, teamMember])
    teamCall()
    console.log('TEAM', fullTeam)
    console.log('MEMBER', teamMember)
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