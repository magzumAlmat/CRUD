import { useState,useRef } from "react";
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


let arrayOfResults=[]



const Home = () => {
  const [apiResponse, setApiResponse] = useState(false);
  const isFirstRender = useRef(true);
  var includes = require('array-includes');
  let userObj={}
  let gg =[];
  let gglenght=0
  //   const navigate = useNavigate();
  //   const handleLogout = async () => {
  //     try {
  //       await logOut();
  //       navigate("/");
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  

  useEffect(() => {
  
  
      if (isFirstRender.current) {
        isFirstRender.current = false;
        fetch("http://localhost:4000/api/user")
           .then((response) => response.json())
          .then((response) =>  setApiResponse({ response },console.log(' 1 this is response in fetch ', response)));  
          console.log('this is apiReponse in fetch   ',apiResponse)

  
    userObj=user.name.lastNotifiedUid
      
    gglenght=gg.length


    
    let Restultgg=false
  for (let i = 0; i < gglenght; i++) {
    console.log('6 this is gg output ',gg[i].name );
    console.log(userObj)
    Restultgg=gg[i].name.includes(userObj)
    
    arrayOfResults.push(Restultgg);
    console.log('   ')
    console.log('   ')
    console.log('   ')
  

    console.log('   ')
    console.log('resultGG',arrayOfResults)
    // contains(gg[i].name,userObj);


  }

  gg=apiResponse
  console.log('MAIN ARRAY  gg fetch',gg)



 
    // for(var i=0; i<arrayOfResults; i++) 
    // { 
    //   if (arrayOfResults[i]===true)
    //   { console.log('RESULT GG IS TRUE')}
    //   console.log('elment',arrayOfResults[i])
    // }

 

    if (arrayOfResults.includes(true))
    {
      console.log('RESULT GG IS TRUE')
      arrayOfResults.length=0
    }

    else   {
      console.log('НИЧЕ НЕ ДЕЛАЕМ')
      arrayOfResults.length=0
      console.log(' userObj передается в функцию   ',userObj.length,'   ', userObj)
      axios
      .post(`http://localhost:4000/api/user`,{name: userObj, surname: 'none because user from google otp'}, {
      })
      .then(res => {
        // console.log(res);
        // console.log(res.data);
      });
      console.log('Это сообщение из CreateUserAfterAuth я отработался ',gg.length) 


    }}
  
  
  },[])

 
  
  
  // useEffect( () => {
  //   fetch("http://localhost:4000/api/user")
  //     // .then(response =>
  //     //   console.log('----response data        ',response.data),
  //     //   setApiResponse(response.data),
  //     .then((response) => response.json())
  //     .then((response) => setApiResponse({ response }));  
  
  //   // const propertyValues = Object.values(JSON.stringify(apiResponse));

  //   // console.log('тип ',typeof propertyValues.name,'значение ',propertyValues.name);

   
  //   gg=apiResponse.response
  //   console.log('this is ggin fetch',gg)
  //   // console.log(gg)
  //   // console.log('GG - ',gg);
    
  //   // for (var key in gg) {
  //   //   if (gg.hasOwnProperty(key)) {
  //   //     console.log('from map',JSON.stringify(gg.response.name))
  //   //     mapped

 

    
  //   // console.log('THIS IS API RESPONSE ','тип ',typeof gg,'значение ',gg.response)

  
    

   
  //   // console.log('gglenth ',gglenght)
    
  // },[apiResponse]
             
             
  // )//конец UseEffect
               

  // console.log('this is gg',gg)


    return (
      <>
        
          <Navbar />
          <h1>sfgsdgf</h1>
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
  
        </>
      
    );
  };
  
  export default Home;
    
    // if (gg[i].name !== userObj) {
        //   console.log(gg,'7 Есть такой пользователь ')
        //  }
        
        //  else {
        // console.log('gg- ',gg[i].name,'userObj- ',userObj,' 8 Такого пользователя нет щас создам! ')
        // createUser(userObj)
        
      
      // axios
      // .post(`http://localhost:4000/api/user`,{name: userObj, surname: 'none because user from google otp'}, {
        
      // })
      // .then(res => {
      //   // console.log(res);
      //   // console.log(res.data);
      // });
      // console.log('Это сообщение из CreateUserAfterAuth я отработался ') 

    

      
     

     
  
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
  
           

 