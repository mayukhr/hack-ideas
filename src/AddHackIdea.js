import React, { useState, useEffect } from 'react';

const AddHackIdea = ({user}) => {
  return (
    <>
      <div className='user-display input-label'> Please add your Hack Idea here: </div>
      <textarea className='form-input-field add-hack-idea-area' id='hackIdea' name='hackIdea' rows='4' columns='50'></textarea>
      
      <div className='user-display input-label'> Tags (Comma separated): </div>
      <input
        className='form-input-field form-input-tags'
        type='text'
        id='username'
        placeholder='Enter your Employee Id'
        // onChange={({ target }) => setEmployeeId(target.value)}
        // value={employeeId}
      />
      <div className='title'>
        <button className='btn-primary title' type='button' onClick> Submit </button>
      </div>
    </>
  );
};

export default AddHackIdea;
