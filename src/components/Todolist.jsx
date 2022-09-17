import React, { Component } from 'react'
import Todo from './Todo'

class Todolist extends Component {
  state = { 
    tasks: [
      {id: 0, name:"task1", status:"notStarted"},
      {id: 1, name:"task2", status:"completed"},
      {id: 2, name:"task2", status:"completed"},
   ]
  }

  render() {
    const {newTask} = this.props;
    // this.setState({tasks: this.state.tasks.concat(newTask)})
    const {tasks} = this.state
    return (
      tasks.map(task => {
            return (   
            <Todo  
              id={Math.random()}
              key={Math.random()}
              name={task.name}
              status={this.props.status}
            />
            )
        })
    )
  }
}
export default Todolist