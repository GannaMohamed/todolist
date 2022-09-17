import React from 'react'
import Todolist from './components/Todolist'
import Input from './components/Input'
import Filter from './components/Filter'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

class App extends React.Component {

  state={
    newTask: '',
    status:['notStarted', 'inProgress', 'completed']
  }

  add = (newTask) => { 
    this.setState( {newTask: newTask} )
  }


  render() {
    let {newTask, status} = this.state;
    
    return ( 
      <Stack className='page'>
        <Container className="container justify-content-center">
          <Input handleAddedTask={this.add} id="input" status={status}></Input>
          <hr/>
          <Stack direction='horizontal' className='justify-content-end'>Display: <Filter status={status}></Filter></Stack>
          <Todolist key={Math.random()} newTask={newTask}/>
        </Container>
      </Stack>
    )
  }
}
export default App;
