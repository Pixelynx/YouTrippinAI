// FormContainer.tsx
import React, { useState } from 'react';
import { Box, Card, CardContent, Container, Step, StepLabel, Stepper } from '@mui/material';
import UserInfoInput from './UserInfoInput';
import TravelPreferencesInput from './TravelPreferencesInput';

// Define the form data structure
export interface FormDataType {
  // User Info
  age: string;
  gender: string;
  income: string;
  // Travel Preferences
  travelFrequency: string;
  preferredActivities: string;
  vacationBudget: string;
  proximityToMountains: string;
  proximityToBeaches: string;
}

const steps = ['User Information', 'Travel Preferences'];

const FormContainer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({
    // User Info
    age: '',
    gender: '',
    income: '',
    // Travel Preferences
    travelFrequency: '',
    preferredActivities: '',
    vacationBudget: '',
    proximityToMountains: '',
    proximityToBeaches: '',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormChange = (field: keyof FormDataType, value: string | number) => {
    setFormData({
      ...formData,
      [field]: value.toString(),
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: -4, mb: 4, position: 'relative', zIndex: 1 }}>
      <Card elevation={6}>
        <CardContent sx={{ p: 4 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          {activeStep === 0 && (
            <UserInfoInput 
              formData={formData} 
              onFormChange={handleFormChange} 
              onNext={handleNext} 
            />
          )}
          
          {activeStep === 1 && (
            <TravelPreferencesInput 
              formData={formData} 
              onFormChange={handleFormChange} 
              onBack={handleBack} 
            />
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default FormContainer;