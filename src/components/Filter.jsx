import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

export default class Filter extends Component {
  render() {
    return (
        <Form.Select
            key='selectStatus' 
            id='selectStatus' 
            title='Select Status'
          className='select'>
                <option value='all' className='all' key={`all${Math.random()}`}>all</option>

                {this.props.status.map(el => (
                    <option value={el} className={el} key={`${el}${Math.random()}`}>{el}</option>
            ))}
        </Form.Select>
    )
  }
}
