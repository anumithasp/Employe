import React from 'react'
import Box from '@mui/material/Box'
import { Button, TextField } from '@mui/material'
import NavBar from './NavBar';

const Form = () => {
  return (
     <div>
        <NavBar/>
        <br/> <br/><br/><br/><br/><br/><br/>
        
       <Box component="form"
        sx={{
            '& .MuiTextField-root': {m: 2, width: '25ch'}
          }}
        >
        <div>
        <TextField
        label="Name"
        id="outlined-name"
        InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
        label="Designation"
        id="outlined-name"
        InputLabelProps={{
            shrink: true,
          }}
        />
        </div>

        <div>
        <TextField
        label="Location"
        id="outlined-name"
        InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
        label="Salary"
        id="outlined-name"
        InputLabelProps={{
            shrink: true,
          }}
        />
        </div>

        
       <div>
       <Button variant="contained" color="success">Submit</Button>
       </div>

       </Box>
    </div>
  );
};

export default Form

