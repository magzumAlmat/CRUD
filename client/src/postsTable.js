
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'
import { JsonToTable } from "react-json-to-table";
import { MDBDataTable } from 'mdbreact';




 const woHeader =  [{
    label: 'id',
    field: 'id',
    sort: 'asc',
    width: 150
  },
  {
    label: 'title',
    field: 'title',
    sort: 'asc',
    width: 270
  },
  {
    label: 'content',
    field: 'content',
    sort: 'asc',
    width: 200
  },
  {
    label: 'userId',
    field: 'user_id',
    sort: 'asc',
    width: 200
  }
]




export class Poststable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "" ,
            columns: woHeader,
        };
    }



  

    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://localhost:4000/api/posts')
            .then(response => this.setState({ apiResponse: response.data }));
            
    }

    
    
  
    

    render() {
    
    const inf={
        "id":"YCB4753001",
        "name":"02/10/2020",
        "surname":"evolve",
       
    };    

    const data = {
        columns: woHeader,
        rows: this.state.apiResponse
      };

      console.log('this state from postTable',this.state.apiResponse)
        return (
            <div className="App">
           
                <br/>
            
                <div className="container">
                        <MDBDataTable className="container"
                        striped
                        bordered
                        small
                        data={data}
                    />
             
                </div>
 
            </div>
        );
    }
}
