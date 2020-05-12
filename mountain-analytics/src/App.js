import React, {createContext, useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import './App.css';
import {validToken} from "./services/api-helper-userAuth";
import {getDomains} from "./services/api-helper-domain";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] =  useState("");
    const [userProfile, setUserProfile] = useState({});
    const [orgId, setOrgId] = useState("");
    const [domains, setDomains] = useState([])

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        if(token){
            validToken(token).then(resp => {
                if(resp.status === 200){
                    localStorage.setItem("token", resp.token);
                    setToken(resp.token); // May need to uncomment if token expires?
                    setLoggedIn(true);
                    setUserProfile(resp.userProfile)
                    setOrgId(resp.userProfile.org._id)
                }else{
                    setLoggedIn(false)
                }

            }).catch(err =>{
                console.error(err)
            })
        }
    }, [token]);

    useEffect(() => {
        if(orgId.length > 1) {
            getDomains(token, orgId).then(resp => {
                if (resp.status === 200) {
                    setDomains(resp.domains)
                }
            }).catch(err => {
                console.error(err)
            })
        }
    }, [orgId])


    return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} userProfile={userProfile}/>
      <TrackerContext.Provider value={{
          loggedIn,
          setLoggedIn,
          token,
          setToken,
          userProfile,
          setUserProfile,
          orgId,
          setOrgId,
          domains,
          setDomains
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