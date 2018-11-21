import React, { Component } from 'react'

const apiURL = "api/todos";

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state={
            todos:[]
        }
    }

    componentWillMount(){
        this.loadTodo();
    }
    
    loadTodo = () => {
        fetch(apiURL)
        .then( res => {
            if(!res.ok){
                if(res.status >= 400 && res.status < 500){
                    return res.json().then( data => 
                        { 
                            let err = {errorMessage: data.message} 
                            throw err;
                        })
                } else {
                    let err = {errorMessage: 'Server is offline, please try again!'}
                    throw err;
                }
            }
            return res.json();
        })
        .then (todos => this.setState({todos}));
    }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
      </div>
    )
  }
}

export default Todolist
