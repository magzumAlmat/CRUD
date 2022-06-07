
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'
import { JsonToTable } from "react-json-to-table";


import { MDBDataTable,MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
// import  Table  from 'rsuite';
// import Cell from 'rsuite'
// import Column from 'rsuite'
// import HeaderCell from 'rsuite'


// or


 const woHeader =  [{
    label: 'id',
    field: 'id',
    sort: 'asc',
    width: 150
  },
  {
    label: 'name',
    field: 'name',
    sort: 'asc',
    width: 270
  },
  {
    label: 'surname',
    field: 'surname',
    sort: 'asc',
    width: 200
  },
  {
    label: 'Delete it?',
    field: 'delete',
    sort: 'asc',
    width: 200
  },

]




export class Usertable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "" ,
            columns: woHeader,
        };
    }



  

    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://localhost:4000/api/user')
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

                    {/* <table>
                        <tr >{woHeader.id}</tr>
                        <tr >{woHeader.name}</tr>
                        <tr >{woHeader.surname}</tr>
                        <tr >delete?</tr>
                        <td>{this.state.apiResponse.id}</td>
                        <td>{this.state.apiResponse.name}</td>
                        <td>{this.state.apiResponse.surname}</td>
                    </table> */}


             
                </div>
            </div>
        );
    }
}

export default new Usertable();