import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { SignedInComponent } from "./SignedInComponent";
import "../App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Usertable } from "../usersTable";
import "../App.css";
import { Poststable } from "../postsTable";
import Createuser from "../createUser";
import axios from "axios";
import { auth, useAuth } from "../firebase";
import { userAuthContext, useUserAuth } from "../context/UserAuthContext";
// import { CreateuserAfterAuth } from "../CreateUserAfterAuth";

import React, { useEffect } from "react";
import { async } from "@firebase/util";

const user = {
  name: auth,
};

const Home = () => {
  const [apiResponse, setApiResponse] = useState("");
  //   const navigate = useNavigate();
  //   const handleLogout = async () => {
  //     try {
  //       await logOut();
  //       navigate("/");
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  useEffect(async () => {
    fetch("http://localhost:4000/api/user")
      // .then(response =>
      //   console.log('----response data        ',response.data),
      //   setApiResponse(response.data),
      .then((response) => response.json())
      .then((response) => setApiResponse({ response }));  
  
    // const propertyValues = Object.values(JSON.stringify(apiResponse));

    // console.log('тип ',typeof propertyValues.name,'значение ',propertyValues.name);

    let gg =[];
    gg=apiResponse.response
    // console.log(gg)
    // console.log('GG - ',gg);
    
    // for (var key in gg) {
    //   if (gg.hasOwnProperty(key)) {
    //     console.log('from map',JSON.stringify(gg.response.name))
    //     mapped

 

    // console.log('this is gg',gg)
    // console.log('THIS IS API RESPONSE ','тип ',typeof gg,'значение ',gg.response)

  
    let userObj={}

    userObj=user.name.lastNotifiedUid
    let gglenght=0
    gglenght=gg.length
    // console.log('gglenth ',gglenght)
    
    for (let i = 0; i < gglenght; i++) {
              console.log('this is gg output ', gg[i].name );
              console.log(userObj)

                  if (gg[i].name === userObj) {
                    console.log(gg,'Есть такой пользователь ')
                    break;

                  }
                  
                   else {
                  console.log('gg- ',gg[i].name,'userObj- ',userObj,'Такого пользователя нет щас создам! ')
                
               }
               
    }
    
  }
             
             
  )//конец UseEffect

  
    // let arr = ["Яблоко", "Апельсин", "Груша"];

  
    // let kk={ 'name1': gg.response['name'], 'name2': userObj };

    // console.log('this is kk       ', kk,'end of kk                 ')







    // console.log(
    //   "тип ",
    //   typeof userObj,
    //   "значение ",
    //   userObj
    // );

      



    // var myObject = apiResponse.response

    // for (var key in myObject) {
    //   if (myObject.hasOwnProperty(key)) {
    //    kk= myObject
    //   }
    // }

    // console.log('this is kk - ',kk);






          // console.log(gg)
  
           

            
    // for (let i = 0; i < gg.length; i++) {
    //           console.log('this is gg output ', gg[i] );
    // }
        
        


  

  
  return (
    <>
      <div className="d-grid gap-2">
        <Navbar />

        {/* <SignedInComponent/> */}
        <br />
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

        {/* <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button> */}
      </div>
    </>
  );
};

export default Home;
