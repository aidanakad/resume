import React from 'react';
import shortid from 'shortid'
import Todo from './Todo'
import {Form, Button} from 'react-bootstrap'
import Priorities from './Priorities'
import style from './todo.module.css'


function ToDoList() {
  const initialState = {
    todos: [],
    title: '',
    desc: '',
    priority: 'Normal'
  
  }
  
  const reducer = (state, action) =>{
    switch(action.type){
      case 'CHANGE_TITLE':
        return{...state, title: action.title};
      case 'CHANGE_DESC':
        return{...state, desc: action.desc}
        case 'CHANGE_PRIORITY':
          return{...state, priority: action.priority}
      case 'ADD_NEW_TASK':
        return {...state, todos:[...state.todos, action.todos]}
      case 'RESET_FIELDS':
        return{...state, title: '', desc:'', priotity: ''}
      default:
        throw new Error()
  
    }
  }
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const {title, desc, priority, todos} = state
  
    const handleAdd = (e) => {
      e.preventDefault()
      const newTodo = {
        id: shortid.generate(),
        title, desc, priority
      }
      dispatch({type: 'RESET_FIELDS'})
      dispatch({type: 'ADD_NEW_TASK', todos: newTodo})
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
    };
      fetch('http://localhost:3030/add', requestOptions)
    .then(response => {
      if (!response.ok) return response.json()
      throw new Error('Can not add new task')
    })
    }
  

  return (
    <div>
        <Form className={style.form}>
          <h3>NEW TASK</h3>
          <Form.Control 
            type="text" 
            placeholder="Title" 
            value={title}
            onChange={(e) => dispatch({type:'CHANGE_TITLE', title: e.target.value})}
          />
          <Form.Control
            as="textarea" rows="3" 
            placeholder="Description" 
            value={desc}
            onChange={(e) => dispatch({type:'CHANGE_DESC', desc: e.target.value})}
          />
          <Priorities 
            priority={priority}
            setPriority={(value)=> dispatch({type:'CHANGE_PRIORITY', priority: value})}
          />
            <Button variant="outline-secondary" onClick={handleAdd}>
              Add task
            </Button>
      </Form>
      <div className={style.list}>
        { todos.map(c => <Todo key={c.id} todo={c}/>) }
      </div>
    </div>
  )
}
export default ToDoList