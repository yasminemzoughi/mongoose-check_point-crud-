import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useMatch, useNavigate } from 'react-router-dom'
import { editContact, getContact} from '../JS/Actions/contact'

const Edit = () => {
    const [newContact, setNewContact] = useState({
        name:"",
         email:"",
          phone:""});
const dispatch = useDispatch();
const contactToGet = useSelector(
  (state) => state.contactReducer.contactToGet);

  const match = useMatch("/edit/:id")  
const navigate = useNavigate()

const  HandleChange = (e)=> {
    setNewContact({...newContact, [e.target.name]: e.target.value})
}
useEffect(() => {
   dispatch(getContact(match.params.id))
})

const handleEdit = () =>{
    dispatch(editContact(match.params.id, newContact ))
    navigate(-1)
}

return (
    <div>
       <Form.Label>Name</Form.Label>
        <Form.Control
         type="text" 
         placeholder={`${contactToGet.email}`}
         name="name"
         value={newContact.name}
          onChange={HandleChange} />

        <Form.Label>Email address</Form.Label>
        <Form.Control
         type="email" 
         placeholder={`${contactToGet.email}`}
         name="email" 
         value={newContact.email} 
         onChange={HandleChange}/>

        <Form.Label>phone</Form.Label>
        <Form.Control
         type="number" 
         placeholder={`${contactToGet.phone}`}
          name="phone"
           value={newContact.phone} 
           onChange={HandleChange}/>
<Link to='/Contacts'>
        <Button variant="primary" type="submit" onClick={handleEdit}>
        Edit
      </Button></Link>
    </div>
  )
}

export default Edit
