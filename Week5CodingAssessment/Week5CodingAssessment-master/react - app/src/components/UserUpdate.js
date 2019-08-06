import React from 'react';
import axios from 'axios';

export default class UserUpdate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name:'',
            desc:'',
            genre:'',
            cast:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.id = this.props.match.params.id
        console.log(this.id);
        // axios.get('http://localhost:8000/api/movies/'+this.id).then(res => this.setState( {
        //     name:res.data.data.name,
        //     desc:res.data.data.desc,
        //     genre:res.data.data.genre,
        //     cast:res.data.data.stars
        // }));
      }
    // componentDidMount(){
    //     this.id = this.props.match.params.id
    //     console.log(this.id);
    //     axios.get('http://localhost:8000/api/movies/'+this.id).then(res => this.setState( {
    //         name:res.data.data.name,
    //         desc:res.data.data.desc,
    //         genre:res.data.data.genre,
    //         cast:res.data.data.cast
    //     }));
    //     console.log(this.state);
    // }
    update(){
        console.log("in update");
        let name = document.getElementById('name');
        let desc = document.getElementById('name');
        let genre = document.getElementById('name');
        let cast = document.getElementById('name');
        let movie = {
            name:name,
            desc:desc,
            genre:genre,
            cast:cast,
            value:''
        }
        axios.post('http://localhost:8000/api/movies/'+this.id,movie).then(res => this.setState({user:res.data.data}));
    }
    onTodoChange(value){
        this.setState({
             name: value
        });
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
      }
      handleSubmit(event) {
          console.log(this.state);
        let movie = {
            name:this.state.name,
            desc:this.state.desc,
            genre:this.state.genre,
            stars:this.state.cast
        }
        axios.put('http://localhost:8000/api/movies/'+this.id,movie).then(res => console.log(res.data));
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }
    render(){
        return(
            <div>
            <h1>Movie Details</h1>
            {/* <h3>Name: {this.state.user.name}</h3>
            <h3>Movie Description: {this.state.user.desc}</h3>
            <h3>Movie Genre: {this.state.user.genre}</h3>
            <h3>Movie Cast: {this.state.user.stars}</h3> */}
            {/* <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" value={this.state.desc} onChange={this.handleChange} />
                </label>
                <label>
                    Genre:
                    <input type="text" value={this.state.genre} onChange={this.handleChange} />
                </label>
                <label>
                    Cast:
                    <input type="text" value={this.state.cast} onChange={this.handleChange} />
                </label>
                    <input type="submit" value="Submit" />
            </form> */}
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.name} name="name" id="name" onChange={this.handleChange} />
                </label>
                <label>
                Description:
                <input type="text" value={this.state.desc} name="desc" id="desc" onChange={this.handleChange} />
                </label>
                <label>
                Genre:
                <input type="text" value={this.state.genre} name="genre" id="genre" onChange={this.handleChange} />
                </label>
                <label>
                Cast:
                <input type="text" value={this.state.cast} name="cast" id="cast" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h2></h2>
            </div>
        );
    }
}