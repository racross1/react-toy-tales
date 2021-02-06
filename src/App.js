import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
const toysURL = 'http://localhost:3000/toys'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount() {
    this.getToys()
  }

  getToys = () => {
    fetch(toysURL)
    .then(resp => resp.json())
    .then(toys => this.setState({toys: toys}))
  }

  handleNewToy = (newToy) => {
    fetch(toysURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy),
    })
    .then(response => response.json())
    .then(toy => this.setState({
        toys: [...this.state.toys, toy]
      })
    )
    .catch((error) => {
      console.error('Error:', error);
    });
    
    
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  delete = (toyId) => {
    fetch(toysURL+`/${toyId}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => this.getToys())
      .catch((error) => {
          console.error('Error:', error)
      })
  }

  addLike = (toyId) => {
    let toy = this.state.toys.find(t => t.id === parseInt(toyId))
    toy.likes++
    fetch(toysURL+`/${toyId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({likes: toy.likes}),
    })
    .then(response => response.json())
    // .then(toy => console.log(toy))
    .then(toy => this.setState({toys: this.state.toys.map(t => t.id === toy.id ? toy : t )}))
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleNewToy={this.handleNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} delete={this.delete} addLike={this.addLike}/>
      </>
    );
  }

}

export default App;
