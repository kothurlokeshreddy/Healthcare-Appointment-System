import React, { useState } from 'react';
import DoctorList from './components/DoctorList';
import DoctorProfile from './components/DoctorProfile';
import AppointmentForm from './components/AppointmentForm';
import { DoctorProvider } from './context/DoctorContext';
import './App.css';

function App() {
  const [step, setStep] = useState('list');

  return (
    <DoctorProvider>
      <div className="app">
        <h1>Healthcare Booking System</h1>
        {step === 'list' && <DoctorList onViewProfile={() => setStep('profile')} />}
        {step === 'profile' && <DoctorProfile onBook={() => setStep('book')} onBack={() => setStep('list')} />}
        {step === 'book' && <AppointmentForm onBack={() => setStep('profile')} />}
      </div>
    </DoctorProvider>
  );
}

export default App;
