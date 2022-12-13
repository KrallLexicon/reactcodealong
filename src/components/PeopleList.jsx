import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Person } from './Person';
import { Link } from 'react-router-dom';


export default class PeopleList extends React.Component{
    state= {
        people: []
    }
    componentDidMount(){
        axios.get(`https://localhost:7249/api/react`)
        .then(result =>{
            const people = result.data;
            this.setState({people});
        })
    }
    render(){
        return(
            <div className="container">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((person)=>
                        <Person key={person.id} person={person}/>
                        )}
                    </tbody>
                </Table>
                <Link to="/Create">
                    <button>Create new person</button>
                </Link>
            </div>
        )
    }
}

