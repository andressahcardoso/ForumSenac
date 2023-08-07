import React from 'react';
import { useLocation } from 'react-router-dom';

function Home(props) {
    const location = useLocation();
    const user = location.state;

  return (
    <div>
      <h1>Welcome, {user?.name || 'Guest'}</h1>
      <img src={user?.picture}></img>
    </div>
  );
};

export default Home;
