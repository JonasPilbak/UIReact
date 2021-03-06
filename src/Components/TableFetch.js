<<<<<<< HEAD
import React, {Component} from 'react';
import ReactTable from "react-table";
import axios from "axios";

class TableFetch extends Component {
    constructor(props) {
        super(props);
        //Initial data from API
        this.state = {
          data: []
        };
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
          // Update react-table
          this.setState({
            posts: res.data,
            data: res.data.slice(0, 5),
            
          });
        });
      }
      render() {
        const columns = [
          {
            Header: "User ID",
            accessor: "id",
          },
          {
            Header: "ID",
            accessor: "userId",
           
          },
          {
            Header: "Title",
            accessor: "title",
           
          },
          {
            Header: "Content",
            accessor: "body",
            
          }
        ];
        return (
          <ReactTable
            columns={columns}
            data={this.state.data} />

         
        );
      }
    }
 
=======
import React, {Component} from 'react';
import ReactTable from "react-table";
import axios from "axios";

class TableFetch extends Component {
    constructor(props) {
        super(props);
        //Initial data from API
        this.state = {
          data: []
        };
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
          // Update react-table
          this.setState({
            posts: res.data,
            data: res.data.slice(0, 5),
            
          });
        });
      }
      render() {
        const columns = [
          {
            Header: "User ID",
            accessor: "id",
          },
          {
            Header: "ID",
            accessor: "userId",
           
          },
          {
            Header: "Title",
            accessor: "title",
           
          },
          {
            Header: "Content",
            accessor: "body",
            
          }
        ];
        return (
          <ReactTable
            columns={columns}
            data={this.state.data} />

         
        );
      }
    }
 
>>>>>>> 9fd8523aa2bd504cd014cc7219c9e12c5242609d
export default TableFetch;