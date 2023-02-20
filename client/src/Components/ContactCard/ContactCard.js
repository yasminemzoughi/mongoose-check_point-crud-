import React from 'react'
import {Card,Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteContact } from '../../JS/Actions/contact'
import './ContactCard.css'


const ContactCard = ({contact}) => {
const dispatch=useDispatch()
const navigate = useNavigate()
  return (
    <div className='CARD'>
       <Card className='CARD' style={{ width: '15rem' }}>
      <Card.Img  className='pic' variant="top" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text>{contact.phone}</Card.Text>
        <Button className='BTN1' variant="primary"
         onClick={()=>dispatch(deleteContact(contact._id))}>
          delete
          </Button>

          <Button variant="primary" onClick={()=> navigate(`/edit/${contact._id}`)}>
          Edit
          </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard
