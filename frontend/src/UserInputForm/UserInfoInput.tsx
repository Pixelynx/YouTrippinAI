import React from 'react';
import { 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Grid, 
  Typography, 
  Button, 
  Box 
} from '@mui/material';
import { FormDataType } from './FormContainer';

interface UserInfoInputProps {
  formData: FormDataType;
  onFormChange: (field: keyof FormDataType, value: string | number) => void;
  onNext: () => void;
}

const UserInfoInput: React.FC<UserInfoInputProps> = ({ formData, onFormChange, onNext }) => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
        Tell Us About Yourself
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 4 }}>
        We'll use this information to personalize your travel recommendations
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <TextField 
              label="Age" 
              type="number" 
              variant="outlined"
              value={formData.age}
              onChange={(e) => onFormChange('age', e.target.value)}
              placeholder="Enter your age"
              InputProps={{ inputProps: { min: 0 } }}
            />
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select 
              labelId="gender-label" 
              id="gender" 
              value={formData.gender}
              onChange={(e) => onFormChange('gender', e.target.value)}
              label="Gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
              <MenuItem value="prefer-not-to-say">Prefer not to say</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <TextField 
              label="Income" 
              type="number" 
              variant="outlined"
              value={formData.income}
              onChange={(e) => onFormChange('income', e.target.value)}
              placeholder="Enter your income"
              InputProps={{ 
                inputProps: { min: 0 },
                startAdornment: <Box component="span" sx={{ mr: 1 }}>$</Box>
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={onNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default UserInfoInput;
