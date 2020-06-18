import React from 'react'
import shortid from 'shortid'
import Card from './Card'
import {Button, Form} from 'react-bootstrap'
import style from './contactList.module.css'

function ContactList() {
  const initialState = {
    contacts: [],
    name: '',
    phone: ''
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
        return {...state, name: action.payload };
      case 'CHANGE_PHONE':
        return {...state, phone: action.payload };
      case 'ADD_NEW_CONTACT':
        return {...state, contacts: [...state.contacts, action.payload] };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { name, phone, contacts } = state


  const handleAdd = (e) => {
    e.preventDefault()
    if (!name || !phone) {
      alert('заполните все поля')
      return
    }
    const newContact = { id: shortid.generate(), name, phone }
    dispatch({ type: 'CHANGE_NAME', payload: '' })
    dispatch({ type: 'CHANGE_PHONE', payload: '' })
    dispatch({ type: 'ADD_NEW_CONTACT', payload: newContact })
  }

  return (
    <div className={style.page}>
      <Form className={style.form}>
        <h3>Новый контакт</h3>
        <Form.Control 
          type="text" 
          placeholder="Имя" 
          value={name}
          onChange={(e) => dispatch({ type: 'CHANGE_NAME', payload: e.target.value })}
        />
        <Form.Control 
          type="text" 
          placeholder="Телефон" 
          value={phone}
          onChange={(e) => dispatch({ type: 'CHANGE_PHONE', payload: e.target.value })}
        />
        <Button variant="outline-secondary"
          onClick={handleAdd}
        >
          Добавить
        </Button>
      </Form>
      <div className={style.list}>
      { contacts.map(c => <Card key={c.id} contact={c}/>) }
      </div>
    </div>
  )
}

export default ContactList