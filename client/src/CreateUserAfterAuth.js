import React,{Component} from 'react';
import axios from 'axios';
import { auth, useAuth } from "./firebase";
import { userAuthContext, useUserAuth} from './context/UserAuthContext';
// const GetCurrentUser=()=>{
//   const currentUser=useAuth()
//   console.log('Current user from firebase file - ',currentUser)
// }






 
  
const user = {
  name: auth,
 
}




export  class CreateuserAfterAuth extends React.Component {
 
  constructor(props) {
    super(props);
    // this.startCreate = this.startCreate.bind(this);
    this.state = { 
        apiResponse: {} ,
        name: [],
        surname: [],
        exist:'',
        createdYesNo:false
     
    };
  
}
  

    
      
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

     
   
      startCreate(){
    
      
      // componentWillUnmount() {
       
        // Simple GET request using axios
        axios.get('http://localhost:4000/api/user')
            .then(response =>
              //  this.setState({ apiResponse: response.data })

              // console.log(response.data),
               this.setState({apiResponse:response.data}),
              
               
             
            );
            
    
        const propertyValues = Object.values(this.state.apiResponse);

              
        console.log('тип ',typeof propertyValues.name,'значение ',propertyValues.name);
        console.log('тип ',typeof user.name.lastNotifiedUid,'значение ',user.name.lastNotifiedUid); 
       
        
     

        if (propertyValues.name === user.name.lastNotifiedUid) {
              console.log('Есть такой пользователь ')
            
        } else {
          console.log('Такого пользователя нет щас создам! ') 
          axios
          .post(`http://localhost:4000/api/user`,{name: user.name.lastNotifiedUid, surname: 'none because user from google otp'}, {
            
          })
          .then(res => {
            // console.log(res);
            // console.log(res.data);
          });
          console.log('Это сообщение из CreateUserAfterAuth я отработался ') 
        }



       
       


    }

    

      
    
    //   componentDidMount() {
    //     // Simple GET request using axios
    //     axios.get('http://localhost:4000/api/user')
    //         .then(response => this.setState({ apiResponse: response.data }));
    // }


    // console.log('this is user',user.name,user.surname)
     
    // Simple GET request using axios

    
  

        //         console.log('Я отработался заполнил ExistUser  1111111111111 ',this.state.apiResponse)
    
      
        
  
      
        //   }
    // }
        
       
  
        


        // console.log('Existing users    ',existUsers)

       
      

      // oneUser=(e)=>{




     
      
       

       
      
        
    //end of handleSubmit

  


  render() {
   

    // console.log('ddddddddd',user.name.lastNotifiedUid)
    return (
      
        <div>
            <h1 onLoadStart={this.startCreate()}>Пользователь создался в базе </h1>
           
         
            {/* <button onClick={this.oneUser()}>PUSH</button> */}

        </div>
    )
  }
}



export default new CreateuserAfterAuth();