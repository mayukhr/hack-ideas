import React, { useState, useEffect } from "react";
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import './App.css';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(localStorage.getItem('user'));
  }, []);

  // const returnForm = user ? <div>{user} is loggged in</div> : <LoginForm setUser={setUser} />;
  const returnForm = user ? <HomePage user={user} /> : <LoginForm setUser={setUser} />;


  return (
    <div>{returnForm}</div>
  );
};

export default App;
