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
  Box,
  Slider,
} from '@mui/material';
import { FormDataType } from './FormContainer';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LandscapeIcon from '@mui/icons-material/Landscape';

interface TravelPreferencesInputProps {
  formData: FormDataType;
  onFormChange: (field: keyof FormDataType, value: string | number) => void;
  onBack: () => void;
}

const TravelPreferencesInput: React.FC<TravelPreferencesInputProps> = ({
  formData,
  onFormChange,
  onBack }) => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
        Your Travel Preferences
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{ mb: 4 }}>
        Help us understand what makes your perfect vacation
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="travel-frequency-label">Travel Frequency</InputLabel>
            <Select 
              labelId="travel-frequency-label" 
              id="travel-frequency" 
              value={formData.travelFrequency}
              onChange={(e) => onFormChange('travelFrequency', e.target.value)}
              label="Travel Frequency"
            >
              <MenuItem value="rarely">Rarely (Once a year or less)</MenuItem>
              <MenuItem value="sometimes">Sometimes (2-3 times a year)</MenuItem>
              <MenuItem value="frequently">Frequently (4+ times a year)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FormControl fullWidth margin="normal">
            <TextField 
              label="Vacation Budget" 
              type="number" 
              variant="outlined"
              value={formData.vacationBudget}
              onChange={(e) => onFormChange('vacationBudget', e.target.value)}
              placeholder="Enter your vacation budget"
              InputProps={{ 
                inputProps: { min: 0 },
                startAdornment: <Box component="span" sx={{ mr: 1 }}>$</Box>
              }}
            />
          </FormControl>
        </Grid>
        
        <Grid item xs={12}>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Preferred Activities"
              variant="outlined"
              multiline
              rows={2}
              value={formData.preferredActivities}
              onChange={(e) => onFormChange('preferredActivities', e.target.value)}
              placeholder="e.g., hiking, swimming, sightseeing, cultural experiences"
            />
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography id="mountains-slider" gutterBottom>
              Proximity to Mountains <LandscapeIcon color="primary" />
            </Typography>
            <Slider
              aria-labelledby="mountains-slider"
              value={formData.proximityToMountains ? parseInt(formData.proximityToMountains) : 0}
              onChange={(_, newValue) => onFormChange('proximityToMountains', newValue as number)}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              sx={{ color: 'primary.main' }}
            />
            <Typography variant="caption" color="text.secondary">
              0 = Not important, 10 = Very important
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography id="beaches-slider" gutterBottom>
              Proximity to Beaches <BeachAccessIcon color="secondary" />
            </Typography>
            <Slider
              aria-labelledby="beaches-slider"
              value={formData.proximityToBeaches ? parseInt(formData.proximityToBeaches) : 0}
              onChange={(_, newValue) => onFormChange('proximityToBeaches', newValue as number)}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              sx={{ color: 'secondary.main' }}
            />
            <Typography variant="caption" color="text.secondary">
              0 = Not important, 10 = Very important
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button 
          variant="outlined" 
          color="primary" 
          size="large"
          onClick={onBack}
        >
          Back
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
        >
          Preview Results
        </Button>
      </Box>
    </Box>
  );
}

export default TravelPreferencesInput;
