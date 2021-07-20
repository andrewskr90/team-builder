import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Form from './Form'

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
      name: formValues.name.value,
      email: formValues.email.value,
      role: formValues.role.value
    }
    setMembers(members.push(newMember))
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
