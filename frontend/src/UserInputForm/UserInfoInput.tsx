import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const UserInfoInput = () => {
  return (
    <div>
      <h2>User Information</h2>
      <FormControl margin="normal">
        <TextField label="Age" type="number" variant="outlined" />
      </FormControl>
      <FormControl margin="normal">
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select labelId="gender-label" id="gender" value="">
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl margin="normal">
        <TextField label="Income" type="number" variant="outlined" />
      </FormControl>
    </div>
  );
}

export default UserInfoInput;
