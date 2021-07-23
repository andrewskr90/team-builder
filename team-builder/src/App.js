import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
  }

export default function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }
  
  const submitForm = () => {
    console.log('submit form test')
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    console.log(newMember)
    if (!newMember.name || !newMember.email || !newMember.role) {
      console.log('skipped due to missing field')
      return}
    
    setMembers([...members,newMember]) 
    setFormValues(initialFormValues)
  }
  console.log(members)

  return (
    <div>
      
    <Form  
      update={updateForm}
      submit={submitForm}
      values={formValues}
    />
    <div>
      {members.map((obj) => {
        return (
        <div>
          <p>Name: {obj.name}</p>
          <p>Email: {obj.email}</p>
          <p>Role: {obj.role}</p>
        </div>
        )
      })}
      </div>
    </div>
  )
}