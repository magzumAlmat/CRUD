import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
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
<BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Redirect from='/CreatePost' to='/Register' />
          <Route exact path='/' component={Home}>
            <Home />
          </Route>

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

          

        </Switch>
      </div>
    </BrowserRouter>

    )}

        }