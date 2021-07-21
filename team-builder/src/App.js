import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css';
import Form from './Form'
import axios from 'axios'

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
    if (!newMember.name || newMember.email || newMember.role) return
      
    axios.post('fakeapi.com', newMember)
      .then(res => {
        const memberFromBackend = res.data
        setMembers([memberFromBackend, ...members])
        setFormValues(initialFormValues)
      })
    
  }
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setMembers(res.data))
  }, [])
  
  return (
    <div>{members.name},{members.email},{members.role}
    <Form  
      update={updateForm}
      submit={submitForm}
      values={formValues}
    />
    </div>
  );
}

export default App;
