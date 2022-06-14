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
      .then((response) => setApiResponse({ response, isFetching: false }));

    // const propertyValues = Object.values(JSON.stringify(apiResponse));

    // console.log('тип ',typeof propertyValues.name,'значение ',propertyValues.name);

    const gg = JSON.stringify(apiResponse.response.name);
    console.log(gg);
    // for (var key in gg) {
    //   if (gg.hasOwnProperty(key)) {
    //     console.log('from map',JSON.stringify(gg.response.name))
    //     mapped

    //     if (gg.response.name === user.name.lastNotifiedUid) {
    //       console.log('Есть такой пользователь ')

    //     } else {

    //     console.log('Такого пользователя нет щас создам! ') }

    //   }
    // }

    // console.log('this is gg',gg)
    // console.log('THIS IS API RESPONSE ','тип ',typeof gg,'значение ',gg.response)
    console.log(
      "тип ",
      typeof user.name.lastNotifiedUid,
      "значение ",
      user.name.lastNotifiedUid
    );

    if (gg.response === user.name.lastNotifiedUid) {
      console.log("Есть такой пользователь ");
    } else {
      console.log("Такого пользователя нет щас создам! ");
      // axios
      // .post(`http://localhost:4000/api/user`,{name: user.name.lastNotifiedUid, surname: 'none because user from google otp'}, {

      // })
      // .then(res => {

      // });
      console.log("Это сообщение из CreateUserAfterAuth я отработался ");
    }
  });

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
