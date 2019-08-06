import React from 'react';
import axios from 'axios';
export default class UserAdd extends React.Component{
constructor(props) {
    super(props);
    this.state = {name:'',
        desc:'',
        genre:'',
        cast:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.id);
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
        stars:this.state.cast,
        id:0
    }
    axios.post('http://localhost:8000/api/movies',movie).then(res => console.log(res.data));
    alert('A name was submitted: ' + this.state.name);
    //event.preventDefault();
  }
render(){
    return(
        <div>
        <h1>Movie Add</h1>
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