import React, { useContext, useState } from 'react';
import { DoctorContext } from '../context/DoctorContext';

const AppointmentForm = ({ onBack }) => {
  const { selectedDoctor } = useContext(DoctorContext);
  const [form, setForm] = useState({ name: '', email: '', datetime: '' });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div>
        <h3>Appointment Confirmed!</h3>
        <p>With: {selectedDoctor.name}</p>
        <p>On: {form.datetime}</p>
        <button onClick={onBack}>Back to Doctors</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment with {selectedDoctor.name}</h2>
      <input placeholder="Your Name" required onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" required onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="datetime-local" required onChange={e => setForm({ ...form, datetime: e.target.value })} />
      <button type="submit">Confirm</button>
      <button type="button" onClick={onBack}>Back</button>
    </form>
  );
};

export default AppointmentForm;
