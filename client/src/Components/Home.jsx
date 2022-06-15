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
  const [apiResponse, setApiResponse] = useState(false);
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
    loadBookFromServer()
  }, [])


  async function loadBookFromServer() {
    let response = await fetch('http://localhost:4000/api/user')
    response  = await response.json() 
    setApiResponse(response)
  }
  gg=apiResponse
  console.log('this is ggin fetch',gg)
  
  if (!apiResponse) return false //first render, when useEffect did't triggered yet we will return false





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
               
    
    



  console.log('this is gg',gg)
  userObj=user.name.lastNotifiedUid
    
  gglenght=gg.length

  for (let i = 0; i < gglenght; i++) {
    console.log('6 this is gg output ',gg[i].name );
    console.log(userObj)

        if (gg[i].name === userObj) {
          console.log(gg,'7 Есть такой пользователь ')
         }
        
         else {
        console.log('gg- ',gg[i].name,'userObj- ',userObj,' 8 Такого пользователя нет щас создам! ')
       
        
      
      // axios
      // .post(`http://localhost:4000/api/user`,{name: userObj, surname: 'none because user from google otp'}, {
        
      // })
      // .then(res => {
      //   // console.log(res);
      //   // console.log(res.data);
      // });
      // console.log('Это сообщение из CreateUserAfterAuth я отработался ') 
      
    }

      
     }

  
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