import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.users);
    console.log(JSON.parse(localStorage.users));

  }, [])

  return (
    <div style={{  }}>

      <div style={{  }}>
        <h2>Home Page</h2>

      </div>
      <div style={{   }}>
        <Button variant="text" size="large"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => navigate('registration')} >
          Registration
        </Button>
      </div>
    </div >
  )
}
