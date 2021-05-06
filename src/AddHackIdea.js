import React, { useState } from 'react';

const AddHackIdea = ({user, posts, setIsEnabledAddHackForm}) => {
  const [idea, setIdea] = useState('');
  const [tags, setTags] = useState();
 
  const addHackIdea = () => {
    const tagsList = tags.split(',');
    const newPost = {
      "idea": idea,
      "votes": 0,
      "tags": tagsList,
      "createdAt": Date.now(),
      "createdBy": user,
    }
    posts.unshift(newPost);
    setIsEnabledAddHackForm(false);
  }

  return (
    <>
      <div className='user-display input-label'> Please add your Hack Idea here: </div>
      <textarea 
        placeholder='Add your hack idea..' 
        className='form-input-field add-hack-idea-area' 
        id='hackIdea' 
        name='hackIdea' 
        rows='4' 
        columns='50'
        onChange={({ target }) => setIdea(target.value)} 
      />
      
      <div className='user-display input-label'> Tags (Comma separated): </div>
      <input
        className='form-input-field form-input-tags'
        type='text'
        id='username'
        placeholder='Enter comma separated tags. Ex: React,Javascript'
        onChange={({ target }) => setTags(target.value)}
        value={tags}
      />
      <div className='title'>
        <button className='btn-primary title' type='button' onClick={addHackIdea}> Submit </button>
      </div>
    </>
  );
};

export default AddHackIdea;
