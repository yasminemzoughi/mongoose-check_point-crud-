import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addContact } from '../JS/Actions/contact'
import {Link} from 'react-router-dom'


const Add = () => {
const [newContact, setNewContact] = useState({
  name:"",
   email:"",
    phone:"" })
const dispatch = useDispatch();
const handelChange =(e)=>{
setNewContact({...newContact, [e.target.name] : e.target.value  })
}
const add = () =>{
  dispatch(addContact(newContact))
}
  return (
    <div>
       <Form.Label>Name</Form.Label>
        <Form.Control
         type="text"
          placeholder="Enter a name"
           name='name' 
           value={newContact.name} 
           onChange={handelChange}/>

        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email"
         placeholder="Enter email"
         name='email'
         value={newContact.email} 
         onChange={handelChange}/>

        <Form.Label>Phone</Form.Label>
        <Form.Control  
        type="number"
         placeholder="Enter phone number"
         name='phone' 
         value={newContact.phone}
         onChange={handelChange}/>
        <Link to={'/Contacts'}><Button variant="primary" type="submit" onClick={()=> add()}>
        ADD
      </Button></Link>
    </div>
  )
}

export default Add
