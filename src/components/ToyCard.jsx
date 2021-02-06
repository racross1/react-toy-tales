import React, { Component } from 'react';

class ToyCard extends Component {

  test = (e) => {
    console.log(e.target.parentElement)
  }


  render() {
    return (
      <div id={this.props.toy.id} className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={`${this.props.toy.image}`} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button onClick={(e) => this.props.addLike(e.target.parentElement.id)} className="like-btn">Like {'<3'}</button>
        <button onClick={(e) => this.props.delete(e.target.parentElement.id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
