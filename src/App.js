import React, {useState, useEffect} from 'react';
import './App.css';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';
import RideIndex from './ride/RideIndex';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const protectedView = () => {
    return (sessionToken === localStorage.getItem('token') ? <RideIndex token={sessionToken} /> : <Auth updateToken={updateToken} />)
  }

  return (
    <div className="App">
      <Sitebar clickLogout={clearToken} />
      {protectedView()}
    </div>
  );
}

export default App;