import React, { useState, useEffect } from 'react';
import AppRoutes from "./components/AppRoutes";
import useLocalStorage from "./hooks/useLocalStorage"
import NavBar from './components/NavBar';
import JoblyApi from './api/api';
import Loading from './components/Loading';
import UserContext from './components/UserContext';
import './App.css';
import { jwtDecode } from "jwt-decode";

export const TOKEN_KEY = "token"


function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [token, setToken] = useLocalStorage(TOKEN_KEY);
  const [currentUser, setCurrentUser] = useState(null);
  const [applications, setApplications] = useState(new Set([]));

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if(token){
        try{
          let{ username } = jwtDecode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplications(new Set(currentUser.applications));
        } catch(error){
          console.error("Error: ", error);
          setCurrentUser(null);
        }
      }
      setIsPageLoaded(true);
    }
      setIsPageLoaded(false);
      getCurrentUser();
  }, [token])

  function logout(){
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(userData){
    try{
      let token = await JoblyApi.signup(userData);
      setToken(token);
      console.log("SIGN UP SUCCESSFUL")
      return { success: true };
    } catch(error){
      console.error("Error. Sign up failed. ", error);
      return { success: false, error}
    }
  }

  async function login(userData){
    try{
      let token = await JoblyApi.login(userData);
      setToken(token);
      console.log("LOGIN SUCCESSFUL")
      return { success: true }
    } catch(error){
      console.error("Error. Login Failed. ", error)
      return { success: false, error }
    }
  }

  async function apply(id){
    if(hasAppliedToJob(id)) return;
    try{
        await JoblyApi.applyToJob(currentUser.username, id);
        setApplications(new Set([...applications, id]))
    } catch(error){
        console.error("Application failed")
    }
}

  function hasAppliedToJob(id){
    return applications.has(id);
  }
  if(!isPageLoaded) return <Loading />;

  return (
  <div className='App'>
    <UserContext.Provider value = {{currentUser, setCurrentUser, apply, hasAppliedToJob}}>
      <NavBar logout={logout}/>  
      <AppRoutes login={login} signup={signup} setToken={setToken}/>
    </UserContext.Provider>

  </div>
  )
}

export default App
