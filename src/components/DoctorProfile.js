// DoctorProfile.js

import React, { useContext } from 'react';
import { DoctorContext } from '../context/DoctorContext';

const DoctorProfile = ({ onBook, onBack }) => {
  const { selectedDoctor } = useContext(DoctorContext);

  if (!selectedDoctor) return null;

  return (
    <div className="profile">
      <button type="button" onClick={onBack} style = {{alignSelf : 'flex-start'}}>← Back</button>
      <img src={selectedDoctor.image} alt={selectedDoctor.name} />
      <h2>{selectedDoctor.name}</h2>
      <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
      <p><strong>About:</strong> {selectedDoctor.bio}</p>
      <p><strong>Status:</strong> {selectedDoctor.available ? 'Available' : 'Unavailable'}</p>

      <button
        onClick={onBook}
        disabled={!selectedDoctor.available}
        className={selectedDoctor.available ? 'active-btn' : 'disabled-btn'}
      >
        {selectedDoctor.available ? 'Book Appointment' : 'Doctor Unavailable'}
      </button>
    </div>
  );
};

export default DoctorProfile;
