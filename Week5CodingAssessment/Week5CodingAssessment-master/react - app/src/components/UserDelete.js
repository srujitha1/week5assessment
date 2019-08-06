import React from 'react';
import axios from 'axios';

export default class UserDelete extends React.Component{
    constructor(){
        super();
        this.state={
            response:[]
        }
        this.id = null;
    }
    componentDidMount(){
        this.id = this.props.match.params.id
        console.log(this.id);
        //axios.get('http://localhost:8000/api/movies/'+this.id).then(res => this.setState({user:res.data.data}));
        console.log(this.state.response);
        axios.delete('http://localhost:8000/api/movies/'+this.id).then(res => this.setState({response:res.data.message}));
    }
    render(){
        return(
            <div>
            <h1>{this.state.response}</h1>
            {/* <h3>Name: {this.state.user.name}</h3>
            <h3>Movie Description: {this.state.user.desc}</h3>
            <h3>Movie Genre: {this.state.user.genre}</h3>
            <h3>Movie Cast: {this.state.user.stars}</h3> */}
            </div>
        );
    }
}