import React, { useContext, useState } from 'react';
import { DoctorContext } from '../context/DoctorContext';
import DoctorCard from './DoctorCard';

const DoctorList = ({ onViewProfile }) => {
  const { doctors, setSelectedDoctor } = useContext(DoctorContext);
  const [search, setSearch] = useState('');

  const filtered = doctors.filter(doc => doc.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <input placeholder="Search doctor..." onChange={e => setSearch(e.target.value)} />
      <div className="doctor-list">
        {filtered.map(doc => (
          <DoctorCard
            key={doc.id}
            doctor={doc}
            onClick={() => {
              setSelectedDoctor(doc);
              onViewProfile();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
