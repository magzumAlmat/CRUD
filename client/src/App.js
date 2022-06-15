import { Routes} from 'react-router-dom';


import Home from './Components/Home';
import Login from './Components/Login';

import {Usertable} from './usersTable'
import './App.css'
import {Poststable}  from './postsTable'
import Createuser from './createUser';




import { Container, Row, Col} from "react-bootstrap";

import "./App.css";


import Signup from "./Components/Signup";
import PhoneSignUp from "./Components/PhoneSignUp";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
// import {db} from './firebase'
// import {collection, addDoc, Timestamp} from 'firebase/firestore'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {CreateuserAfterAuth} from './CreateUserAfterAuth';

function App() {
  return (
  // <div>
  //       <SignedInComponent/>
  //       </div>


<Router>
<Container style={{ width: "400px" }}>
<Row>
  <Col>
    <UserAuthContextProvider>
      <Routes>
    
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/phonesignup" element={<PhoneSignUp />} />
         

          <Route  path='/users' element={<Usertable/>}>
       
          </Route>

          <Route  path='/posts' element={<Poststable/>}>
    
          </Route>

          <Route path='/createuser' element={<Createuser/>}>
           
          </Route>
          {/* <Route path='/createuserafterauth' element={<CreateuserAfterAuth/>}>
           
          </Route> */}

       
      </Routes>
    </UserAuthContextProvider>
  </Col>
</Row>
</Container>
</Router>


    // <BrowserRouter>
    //   <div className="App">
    //     <Navbar />
    //     <Switch>
    //     <Redirect from='/CreatePost' to='/Register' />
    //       <Route exact path='/' component={Home}>
    //         <Home />
    //       </Route>

    //       <Route exact path='/users' component={Usertable}>
    //         <Usertable /> 
    //       </Route>

    //       <Route exact path='/posts' component={Poststable}>
    //         <Poststable />
    //       </Route>

    //       <Route exact path='/createuser' component={Createuser}>
    //         <Createuser />
    //       </Route>

    //       {/* <Route exact path='/CreatePost' component={CreatePost}>
    //         <CreatePost />
    //       </Route> */}

        

    //       <Route component=
    //         {NotFound}>

    //       </Route>

          

    //     </Switch>
    //   </div>
    // </BrowserRouter>

    
  );
}

export default App;
