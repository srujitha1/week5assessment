import React,{Component} from 'react';

export default class Card extends Component {
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
        this.props.selected(this.props);
    }
    render(){
        //console.log(this);
        return  (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text"></p>
                    <button className="btn btn-primary" onClick={this.select}>Details</button>
                </div>
                </div>
        );
    }
}