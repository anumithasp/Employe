import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <AppBar position="static" sx={{backgroundColor: '#F2674A', fontFamily: 'Arial', fontSize: '20px',backgroundColor: '#FF5733',color:"white", fontFamily: 'Arial', fontSize: '20px'}} >
    
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            WELCOME...
          </Typography>

                <Typography sx={{ mr: 2 }}>
                    <Link to="/" style={{ textDecoration:'none', color: '#ffffff' }}>HOME</Link> 
                </Typography>
                <Typography sx={{ mr: 2 }}>
                    <Link to="form/" style={{ textDecoration:'none', color:'#ffffff' }}>EMPLOYEE FORM</Link> 
                </Typography>
            </Toolbar>
            

        </AppBar>
    </div>
  )
}

export default NavBar