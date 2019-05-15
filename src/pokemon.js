import React, { Component } from "react";
import axios from 'axios'

 class Pokemon extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       url: ''
     }
   }
  render() {
    return (
      <div className="container">
        <div>
          {this.state.name}
          {this.state.url}
        </div>
      </div>
    );
  }
}
export default Pokemon