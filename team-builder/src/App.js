import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Form from './Form'
import Axios from 'axios'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
  }

function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }
  
  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newMember.name || newMember.email || newMember.role)
      
    setMembers([newMember, ...members]),
    setFormValues(initialFormValues)
    
  }
  
  return (
    <div>{members}
    <Form  
      update={updateForm}
      submit={submitForm}
      values={formValues}
    />
    </div>
  );
}

export default App;
