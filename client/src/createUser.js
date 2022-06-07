import React,{Component} from 'react';
import axios from 'axios';

export default class Createuser extends React.Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          name: [],
          surname: []
        };
      }
      
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        
        const user = {
          name: this.state.name,
          surname: this.state.surname
        }

        console.log('this is user',user.name,user.surname)
        
        axios
          .post(`http://localhost:4000/api/user`,{name: user.name, surname: user.surname}, {
            
          })
          .then(res => {
            console.log(res);
            console.log(res.data);
          });
      };
    
//   handleChange = event => {
//     this.setState({ name: event.target.value });
//     this.setState({ surname: event.target.value });
//   }

//   handleChange = event => {
//     event.preventDefault();
//     let input =this.state.input
//     input[event.target.name]=event.target.value
//     // this.setState({ name: event.target.value });
//   }
   
//   handleSubmit=(event)=>{
//     event.preventDefault();
//     const user =  this.state.input;
        
//     console.log(user)

//     axios.post(`http://localhost:4000/api/user`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
     
//     let input=[]
//     })
//   }

// onInputchange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   onSubmitForm() {
//     let input={}
//     input=this.state
//     console.log(input.name)
//        axios.post(`http://localhost:4000/api/user`, { input })
//       .then(res => {
//         console.log('allResponse',res);
//         console.log('response',res.data);  
//       })
//   }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Add Username:
          <input type="text" name="name" onChange={this.handleChange} />
        </label><br/>
        <label>
          Add User surname:
          <br/>
        <input type="text" name="surname" onChange={this.handleChange} />
        </label><br/>
        <button type="submit button">Add</button>
      </form>
    )
  }
}