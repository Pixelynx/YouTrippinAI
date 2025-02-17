import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const TravelPreferencesInput = () => {
  return (
    <div>
      <h2>Travel Preferences</h2>
      <FormControl margin="normal">
        <InputLabel id="travel-frequency-label">Travel Frequency</InputLabel>
        <Select labelId="travel-frequency-label" id="travel-frequency" value="">
          <MenuItem value="rarely">Rarely</MenuItem>
          <MenuItem value="sometimes">Sometimes</MenuItem>
          <MenuItem value="frequently">Frequently</MenuItem>
        </Select>
      </FormControl>
      <FormControl margin="normal">
        <TextField
          label="Preferred Activities"
          variant="outlined"
        />
      </FormControl>
      <FormControl margin="normal">
        <TextField label="Vacation Budget" type="number" variant="outlined" />
      </FormControl>
      <FormControl margin="normal">
        <TextField
          label="Proximity to Mountains"
          type="number"
          variant="outlined"
        />
      </FormControl>
      <FormControl margin="normal">
        <TextField label="Proximity to Beaches" type="number" variant="outlined" />
      </FormControl>
    </div>
  );
}

export default TravelPreferencesInput;
