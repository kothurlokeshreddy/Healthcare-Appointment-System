import React, { createContext, useState } from 'react';
import doctorsData from '../data/doctors.json';

export const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  return (
    <DoctorContext.Provider value={{ doctors: doctorsData, selectedDoctor, setSelectedDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
};
