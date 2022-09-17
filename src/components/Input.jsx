import React, { Component } from 'react'
import Stack from 'react-bootstrap/Stack'


class Input extends Component {
  state = {
    name: `task ${Math.floor(Math.random()*100)}`,
    status: this.props.status[0]
  }

  handleName = (event) => {
    // put input value inside state
    this.setState( {name: event.target.value} )
    return this.state.name
  }

  handleStatus = (event) => {
    this.setState( {status: event.target.value} )
    return this.state.status

  }

  add = (event) => {
    event.preventDefault();
    let {name, status} = this.state
    let task ={    
    id:Math.random(),
    name,
    status,
   }
   this.props.handleAddedTask(task);
  }

  render() {
    let {status} = this.props
    return ( 
      <form onSubmit={this.add} className='form'>
        <Stack key={Math.random()} className='input' direction='horizontal' gap={3}>
      <input
        placeholder='Task' 
        onChange={this.handleName}
      ></input>
              <select 
              key='selectStatus' 
              id='selectStatus'
              onChange={this.handleStatus}
              className='select'>
                {status.map(el => {  
                  return <option value={el} className={el} key={`${el}${Math.random()}`}>{el}</option>
                })}
            </select>
      <button type='submit' value='Submit' className='addButton'>add</button>
    </Stack>
    </form>

    )
  }
}

export default Input;
