import React,{Component} from 'react';
import {Link} from 'react-router-dom'

export default class User extends Component {
    constructor(){
        super();
        console.log(this);
        this.details = this.details.bind(this);
        this.select = this.select.bind(this);
    }
    details(){
        //console.log(this);
        console.log("came inside event handler");
    }
    select(){
        this.props.selected(this.props.body);
    }
    render(){
        //console.log(this);
        return  (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.mail}</p>
                    <Link className="btn btn-primary" to={`/movies/${this.props.body._id}`}>Details</Link>
                    <Link className="btn btn-primary" to={`/movies/delete/${this.props.body._id}`}>Delete</Link>
                    <Link className="btn btn-primary" to={`/movies/update/${this.props.body._id}`}>Update</Link>
                </div>
                
                </div>
        );
    }
}