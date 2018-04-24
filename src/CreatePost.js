import React, { Component } from "react";


 class CreatePost extends Component {
   state = {
     inputValue:''
   }
   Change = e => {
     this.setState(
       {
         [e.target.name]: e.target.value
       });

   };

  render() {
    return <div className="row" >

            <input name = "inputValue" placeholder = "write what to you do " value ={this.state.inputValue}  onChange = { e => this.Change(e)}/>
            < button className="waves-effect waves-light btn" >button</button>

     
          </div>;
  }
}

export default CreatePost;
