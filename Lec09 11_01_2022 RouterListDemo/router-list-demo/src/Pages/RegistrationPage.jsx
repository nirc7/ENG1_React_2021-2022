import React, { useState } from 'react';
import User from '../Classes/User';
import TextField from '@mui/material/TextField';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';



export default function RegistrationPage() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);
  const [grade, setGrade] = useState(0);
  const navigate = useNavigate();


  const btnAddUser = () => {
    let u = new User(email, name, pass, grade);

    if (localStorage.users !== undefined) {
      let users = JSON.parse(localStorage.users);
      let newUsers = [...users, u];
      localStorage.users = JSON.stringify(newUsers);
    }
    else{
      localStorage.users = JSON.stringify([u]);
    }
    navigate('/');
  }

  return (
    <div style={{}} >
      <h2>Registration Page</h2>
      <TextField id="standard-basic1" label="Email" variant="standard" color="warning" style={{ margin: 10 }}
        onChange={(e) => setEmail(e.target.value)} /> <br />
      <TextField id="standard-basic2" label="Name" variant="standard" color="warning" style={{ margin: 10 }}
        onChange={(e) => setName(e.target.value)} /> <br />
      <TextField id="standard-basic3" label="Password" type="password" variant="standard" color="warning" style={{ margin: 10 }}
        onChange={(e) => setPass(e.target.value)} /> <br />
      <TextField id="standard-basic4" label="Grade" type="number" variant="standard" color="warning" style={{ margin: 10 }}
        onChange={(e) => setGrade(e.target.value)} /> <br />
      <IconButton aria-label="addperson" fontSize="large" onClick={btnAddUser} >
        <PersonAddAltIcon sx={{ fontSize: 50 , color: green[300]}}  />
      </IconButton>
    </div>
  )
}
