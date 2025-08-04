const DoctorCard = ({ doctor, onClick }) => (
  <div className="card" onClick={onClick}>
    <img src={doctor.image} alt={doctor.name} />
    <h3>{doctor.name}</h3>
    <p>{doctor.specialization}</p>
    <span className={doctor.available ? 'available' : 'unavailable'}>
      {doctor.available ? 'Available' : 'Unavailable'}
    </span>
  </div>
);
export default DoctorCard;
