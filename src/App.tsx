import React, {useCallback, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, MemoryRouter} from 'react-router-dom';
import {AuthContext} from "./authentication/auth-context";

import Home from "./components/home/Home";
import About from "./components/about-us/About";
import Activities from "./components/activities/Activities";
import Register from "./components/membership/Register";

import 'bootstrap/dist/css/bootstrap.css';
import Activity from "./components/activities/activity/Activity";
import Redirect from "./components/membership/redirect-page/Redirect";
import Information from "./components/information/Information";
import Login from "./components/admin/login/Login";
import ControlPanel from "./components/admin/control-page/Control-panel";
import AddActivity from "./components/admin/new-activity/AddActivity";
import AllActivities from "./components/admin/edit-activities/select-activity/AllActivities";
import EditActivity from "./components/admin/edit-activities/edit-activity/EditActivity";
import Memberships from "./components/admin/new-applications/Memberships";
import DeleteActivity from "./components/admin/edit-activities/delete-activity/DeleteActivity";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if(isLoggedIn){
    routes = (
          <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/About' element={<About/>} />
            <Route path='/Activities' element={<Activities/> } />
            <Route path='/Register' element={<Register/>} />
            <Route path='/Activities/:activityId' element={<Activity/>} />
            <Route path='/Redirect' element={<Redirect/>} />
            <Route path='/Information' element={<Information/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Admin/Control-panel' element={<ControlPanel/>} />
            <Route path='/Admin/Control-panel>' element={<AddActivity/>} />
            <Route path='/Admin/Control-panel/Activities/Select' element={<AllActivities/>} />
            <Route path='/Admin/Control-panel/Activities/Edit/:activityId' element={<EditActivity/>} />
            <Route path='/Admin/Control-panel/Activities/Delete/:activityId' element={<DeleteActivity/>} />
            <Route path='/Admin/Control-panel/Activities/:activityId' element={<Activity/>} />
            <Route path='/Admin/Control-panel/Memberships' element={<Memberships/>} />
          </Routes>
    )}else{
        routes = (
              <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/About' element={<About/>} />
                <Route path='/Activities' element={<Activities/> } />
                <Route path='/Register' element={<Register/>} />
                <Route path='/Activities/:activityId' element={<Activity/>} />
                <Route path='/Redirect' element={<Redirect/>} />
                <Route path='/Information' element={<Information/>} />
                <Route path='/Login' element={<Login/>} />
              </Routes>
        )
  }

  return (
    <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          login: login,
          logout: logout }}
    >
      <Router>
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
