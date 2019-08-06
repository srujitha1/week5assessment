import React from 'react';
import Card from './Card';
import axios from 'axios';
import User from './User';
import {Link} from 'react-router-dom';

export default class Main extends React.Component{
    //const titleMessage = "IPhone X";
    
    constructor(){
        super();
        this.state={
            users:[]
        }
        // this.fphones = this.state.phones;
        
        console.log(`called constructor from Main component`);
        this.selectedProduct = this.selectedProduct.bind(this);
        //console.log("selected product is");
    }
    selectedProduct(data){
        console.log(data);
        //console.log(this);
        // console.log("The selected product is "+data.title);
        // console.log(this.fphones);
        // const p = this.fphones.filter((phone) => {
        //     if((phone.name !==data.title)&&(phone.desc!==data.body)){
        //         return true;
        //     }
        //      else{
        //         return false;
        //     } } );
        // console.log(p);
        // this.setState({
        //     phones:p
        // })
    }
    componentDidMount(){
        console.log(`Component is mounted on DOM`);
        //let v;
        console.log(this.state.users);
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://example.com";
        axios.get('http://localhost:8000/api/movies').then(res => this.setState({users:res.data.data}));
        //console.log(v);
        // this.fphones = [
        //     {
        //         name:'IPhone',
        //         desc:'Latest model from Apple'
        //     },
        //     {
        //         name:'One Plus 7',
        //         desc:'Latest model from OnePlus'
        //     },
        //     {
        //         name:'Samsung S10',
        //         desc:'Brand new design with optimum performance'
        //     }
        // ]
        // console.log(this.fphones.length);
        // console.log(this.users);
        // // this.setState({
        // //     phones:this.fphones,
        // // });
        // console.log(this.state.phones);
        
        // console.log(this.fphones);
    }
    render(){
        return (
            <div>
            <div className="row">{
                    //this.state.phones.map((phone,index) => <Card key={index} title={phone.name} body={phone.desc} selected={this.selectedProduct}></Card>)
                   this.state.users.map((user) => <User key={user.id} title={user.name} mail={user.desc} body={user} selected={this.selectedProduct}></User>)
            }
            </div>
            <div>
            <Link className="btn btn-primary" to="/AddMovies">Add Movie</Link>
            </div>
            </div>
        );
    }
}