# NITT ECampus

## Overview
NITT ECampus is a **MERN-based online learning platform** for NIT Trichy, offering seamless course admission, online classes, an e-library, quizzes, and more. It provides separate **student and admin panels** and **email notifications** for a complete e-campus experience.



## Technologies Used
- **Frontend**: React.js (Vite)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose


## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **MongoDB** (Local or cloud-based, e.g., MongoDB Atlas)

### Steps to Run Locally
#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/NITT-ECampus.git
cd NITT-ECampus
```

#### 2. Install Dependencies
```bash
# Install server dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

#### 3. Configure Environment Variables
Create a `.env` file in the `backend/` folder and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

#### 4. Start the Application
```bash
# Start the backend
cd backend
nodemon index.js

# Start the frontend
cd ../frontend
npm run dev
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Future Enhancements
- AI-based doubt resolution
- Live class integration (Zoom, Google Meet APIs)

## Contact
For any queries or collaborations, reach out at **your.email@example.com**.
