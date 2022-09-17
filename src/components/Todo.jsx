import React, { Component } from 'react'
import Stack from 'react-bootstrap/Stack'
// import Form from 'react-bootstrap/Form';

class Todo extends Component {
  state = {  }
  render() {
    return ( <Stack direction="horizontal" gap={3}
              className='todo 
                         justify-content-between
                         '>
            <h3>{this.props.name}</h3>     
            {/* <Form.Select 
              key='selectStatus' 
              id='selectStatus' 
              title='Select Status'
              className='select'>
                {this.props.status.map(el => (         
                  <option value='' className={el} key={`${el}${Math.random()}`}>{el}</option>
                ))}
            </Form.Select> */}
            <button className='deleteButton'>del</button>
            </Stack>
    )
  }
}

export default Todo