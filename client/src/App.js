import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import CreatePost from './Components/CreatePost';
import AllPost from './Components/AllPost';
import NotFound from './Components/NotFound';
import {Usertable} from './usersTable'
import './App.css'
import {Poststable}  from './postsTable'
import Createuser from './createUser';

function App() {
  return (
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
  );
}

export default App;
