import React, { useState, createContext, useEffect } from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import './App.css';
import {validToken} from "./services/api-helper-userAuth";

function App() {
    const [loggedIn, setLoggedIn] = useState(true);
    const [token, setToken] =  useState("");
    const [userProfile, setUserProfile] = useState({});
    const [org, setOrg] = useState({});


    /*
        Validate, Fetch, and save user profile
        Fetch and save resources
     */
    useEffect(() => {
        if(token){
            // setLoggedIn(true)
            validToken(token).then(resp => {
                    if(resp.status === 200){
                        localStorage.setItem("token", resp.token);
                        setToken(resp.token); // May need to uncomment if token expires?
                        setLoggedIn(true);
                        setUserProfile(resp.userProfile)
                    }else{
                        setLoggedIn(false)
                    }
                }
            )
        }
    }, [token]);


    return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
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
      <div className="footer">

      </div>
    </div>
    );
}

export default App;
export const TrackerContext = createContext();