import { useState } from "react";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// import { SignedInComponent } from "./SignedInComponent";
import "../App.css";
import Navbar from "./Navbar";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { Usertable } from "../usersTable";
import "../App.css";
// import { Poststable } from "../postsTable";
// import Createuser from "../createUser";
// import axios from "axios";
import { auth, useAuth } from "../firebase";
// import { userAuthContext, useUserAuth } from "../context/UserAuthContext";
// import { CreateuserAfterAuth } from "../CreateUserAfterAuth";

import React, { useEffect ,useRef} from "react";
// import { async } from "@firebase/util";


const ggmain={
  gg:[],
  gglenght:0
}
const user = {
  name: auth,
};


let size=[]
const Home = () => {


let userObj={}

  const [apiResponse, setApiResponse] = useState("");
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);
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
            ggmain.gg=apiResponse.response
            console.log(' 2 End of useEffect ',ggmain.gg)






          return; // 👈️ return early if initial render
        }
    
        console.log('useEffect ran. count is: ', count);
      }, [count]); // 👈️ add state variables you want to track
    
    //      fetch("http://localhost:4000/api/user")
   
     
    //   .then((response) => response.json())
    //   .then((response) =>  setApiResponse({ response },console.log(' 1 this is response in fetch ', response)));  

    //   console.log('this is apiReponse in fetch   ',apiResponse)
    //   ggmain.gg=apiResponse.response
    //   console.log(' 2 End of useEffect ',ggmain.gg)
    //   if (!apiResponse) return <div>Loading...</div>;
     
    // }, []     )

    
    
    // const propertyValues = Object.values(JSON.stringify(apiResponse));

    // console.log('тип ',typeof propertyValues.name,'значение ',propertyValues.name);

  
   
    // console.log(gg)
    // console.log('GG - ',gg);
    
    // for (var key in gg) {
    //   if (gg.hasOwnProperty(key)) {
    //     console.log('from map',JSON.stringify(gg.response.name))
    //     mapped

 

    // console.log('this is gg',gg)
    // console.log('THIS IS API RESPONSE ','тип ',typeof gg,'значение ',gg.response)

    console.log('3 still working');
   

    userObj=user.name.lastNotifiedUid
    
    // ggmain.gglenght=ggmain.gg.length
    
    console.log('4 ggmain ',ggmain)
    
    size = Object.keys(ggmain.gg).length;
    console.log('5 gg LNTHT',size)
    
    if !size{
      console.log('')
      
    }
    else{console.log('')}


    for (let i = 0; i < size; i++) {
              console.log('6 this is gg output ',ggmain.gg[i].name );
              console.log(userObj)

                  if (ggmain.gg[i].name === userObj) {
                    console.log(ggmain.gg,'7 Есть такой пользователь ')
                    break;

                  }
                  
                   else {
                  console.log('gg- ',ggmain.gg[i].name,'userObj- ',userObj,' 8 Такого пользователя нет щас создам! ')
                
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
        
        


  

  
  return !ggmain.gg ? undefined : (
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
