import React, { useState, createContext, useEffect } from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import './App.css';

function App() {
    const [loggedIn, setLoggedIn] = useState(true);
    const [token, setToken] =  useState("");
    const [userProfile, setUserProfile] = useState({});
    const [org, setOrg] = useState({});

    return (
    <div className="App">
      <Header loggedIn={loggedIn}/>
      <TrackerContext.Provider value={{
          loggedIn,
          setLoggedIn,
          token,
          setToken,
          userProfile,
          setUserProfile,
          org,
          setOrg
      } }>
        <Main />
      </TrackerContext.Provider>
    </div>
    );
}

export default App;
export const TrackerContext = createContext();