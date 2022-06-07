import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { SignedInComponent } from "./SignedInComponent";
import '../App.css'
import Navbar from './Navbar';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {Usertable} from '../usersTable'
import '../App.css'
import {Poststable}  from '../postsTable'
import Createuser from '../createUser';


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    
      <div className="d-grid gap-2">
      <Navbar />
      {/* <SignedInComponent/> */}
      <br/>
      {/* <br/>
      <br/>
      <br/>
      <br/>
      <br/><br/>
      <br/>
      <br/>
      <Routes>
      <Route exact path='/users' component={Usertable}>
            <Usertable /> 
    </Route>

          <Route exact path='/posts' component={Poststable}>
            <Poststable />
          </Route>

          <Route exact path='/createuser' component={Createuser}>
            <Createuser />
          </Route>

    </Routes> */}
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
