import React, { Component } from 'react';

class ToyForm extends Component {
// need state to capture inputs, onchange function to populate state and onsubmit function to send back to parent
  state = {
    name: "",
    image: ""  
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewToy({name: this.state.name, image: this.state.image, likes: 0})
    e.target.reset()
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.handleChange} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.handleChange} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
