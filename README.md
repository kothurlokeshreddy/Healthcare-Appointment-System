# 🏥 Healthcare Appointment Booking Interface

A responsive and user-friendly healthcare appointment booking interface built using **React.js**, **JavaScript**, and **CSS**. The application allows users to browse a list of doctors, view their profiles, check availability, and book appointments.

---

## 📌 Objective

To build a simple, intuitive web application that lets users:
- View available doctors.
- Explore doctor profiles and specializations.
- Book an appointment with basic form details.

---

## 🚀 Live Preview

🌐 **Link (Optional)**: [Deployed App (e.g., Netlify)](https://your-deployment-url.netlify.app)

---

## ✅ Core Features

### 🏠 Landing Page
- Displays a list of doctors with:
  - Name
  - Specialization
  - Availability status
  - Profile photo (placeholder)
- Includes a **search bar** to filter doctors by name.

### 👨‍⚕️ Doctor Profile Page
- Shows complete details of the selected doctor.
- Displays availability and bio.
- 'Book Appointment' button enabled only if the doctor is available.

### 📅 Book Appointment Form
- Form includes:
  - Patient Name
  - Email Address
  - Appointment Date & Time
- Shows a success message upon booking.

---

## 🌟 Bonus Features

- ✅ Responsive Design
- ✅ Modular Components (React)
- ✅ React Context API for global state
- ✅ Smooth UI with enhanced CSS styling
- ✅ Search filtering functionality
- 🚧 (Optional) Can be extended with backend (Node.js/Express)

---

## 💻 Technologies Used

| Tool / Library      | Purpose                        |
|---------------------|--------------------------------|
| React.js            | Frontend framework             |
| JavaScript (ES6)    | Scripting                      |
| CSS (Custom)        | Styling                        |
| React Context API   | State management               |
| JSON File           | Mock data for doctors          |
| VSCode / CRA        | Dev environment / scaffolding  |

---

## 🗃️ Folder Structure

```bash
/public
└── /images/profile-placeholder.png
/src
├── /components
│ ├── DoctorList.js
│ ├── DoctorCard.js
│ ├── DoctorProfile.js
│ └── AppointmentForm.js
├── /context
│ └── DoctorContext.js
├── /data
│ └── doctors.json
├── App.js
├── index.js
└── App.css
```

---

## 📦 Installation & Usage

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/healthcare-booking-app.git
cd healthcare-booking-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Application
```bash
npm start
```

### Open http://localhost:3000 to view the app in the browser.

## ⏳ Future Improvements
- Integrate Node.js/Express backend with database (MongoDB or PostgreSQL)

- User authentication (patients/doctors)

- Doctor dashboard to manage availability

- Calendar view for booking slots

- Email confirmation after appointment booking

## 🧠 Challenges Faced
- Designing a responsive and visually clean layout without using frameworks like Tailwind/Bootstrap.

- Managing navigation-like behavior with only local state (instead of routing).

- Ensuring form validation and proper state updates across components.

## 🙌 Acknowledgements
- Profile placeholder image from W3Schools

- Inspired by real-world medical appointment systems and simplified for learning purposes.

## 📫 Contact
- 👨‍💻 Developed by Lokesh Reddy Kothur
- 📧 Email: kothurlokeshreddy@gmail.com
- 🔗 LinkedIn: https://www.linkedin.com/in/kothurlokeshreddy
