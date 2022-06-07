import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import CreatePost from './CreatePost';
import AllPost from './AllPost';
import NotFound from './NotFound';
import {Usertable} from '../usersTable'
import '../App.css'
import {Poststable}  from '../postsTable'
import Createuser from '../createUser';
import React from 'react';

export class SignedInComponent extends React.Component{
render(){
    return(

      <div className="App">
        <Navbar />
        <Routes>
        {/* <Navigate from='/CreatePost' to='/Register' /> */}
        <Route
            path="/home"
            element={
      
                <Home/>
              
            }
          />

          <Route exact path='/users' component={Usertable}>
            <Usertable /> 
          </Route>

          <Route exact path='/posts' component={Poststable}>
            <Poststable />
          </Route>

          <Route exact path='/createuser' component={Createuser}>
            <Createuser />
          </Route>

          {/* <Route exact path='/CreatePost' component={CreatePost}>
            <CreatePost />
          </Route> */}

        

          <Route component=
            {NotFound}>

          </Route>

          

        </Routes>
      </div>
  

    )}

        }