# TouristApp - Travel Planning Application

![image](https://github.com/user-attachments/assets/1582f72d-9aa9-4f6f-ae74-5bb6d2591025)


![image](https://github.com/user-attachments/assets/a046b6bb-87eb-453b-a60d-5f96243738ce)


![image](https://github.com/user-attachments/assets/7bc66c6f-4101-4179-9fec-4fadaa5d568a)



## Overview

TouristApp is a full-stack web application designed to help users plan and manage their travel adventures. Built with React for the frontend and Node.js/Express for the backend, this application allows users to create accounts, plan trips, and manage their travel itineraries.

## Features

- **User Authentication**: Secure signup and login system with JWT tokens
- **Trip Management**: Create, view, and manage personal travel plans
- **Responsive Design**: Modern UI that works on desktop and mobile devices
- **Travel Planning Tools**: Budget planning, date selection, and itinerary building
- **User Dashboard**: Personalized user interface for managing trips

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API requests
- **CSS3** - Custom styling with responsive design

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## Project Structure

```
TouristAppFIN/
├── src/
│   ├── components/
│   │   ├── About.jsx          # About page component
│   │   ├── Login.jsx          # Login form
│   │   ├── SingUp.jsx         # Registration form
│   │   ├── NavBar.jsx         # Navigation component
│   │   ├── AUserSve.jsx       # User dashboard
│   │   ├── FormTrip.jsx       # Trip creation form
│   │   ├── MyTrips.jsx        # Trip management
│   │   └── tipke/             # Additional components
│   ├── assets/                # Static assets
│   ├── img/                   # Images
│   ├── App.jsx                # Main application component
│   └── main.jsx               # Application entry point
├── server/
│   ├── routes/
│   │   ├── korisnici.js       # User routes
│   │   ├── putevi.js          # Trip routes
│   │   └── middlewares/       # Custom middleware
│   ├── models/
│   │   ├── UserModel.js       # User data model
│   │   └── TripModel.js       # Trip data model
│   └── server.js              # Express server setup
└── public/                    # Public assets
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd TOURIST_REACT_git
   ```

2. **Install frontend dependencies**
   ```bash
   cd TouristAppFIN
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the server directory:
   ```
   PORT=3000
   ADRESA_BAZE=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Start the development servers**

   **Backend (Terminal 1):**
   ```bash
   cd TouristAppFIN/server
   npm run start:dev
   ```

   **Frontend (Terminal 2):**
   ```bash
   cd TouristAppFIN
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run start:dev` - Start development server with nodemon
- `npm run start:prod` - Start production server

## API Endpoints

### Authentication
- `POST /korisnici/register` - User registration
- `POST /korisnici/login` - User login

### Trips
- `GET /putevi` - Get all trips for a user
- `POST /putevi` - Create a new trip
- `PUT /putevi/:id` - Update a trip
- `DELETE /putevi/:id` - Delete a trip

## Features in Detail

### User Authentication
- Secure registration and login system
- JWT token-based authentication
- Password hashing with bcrypt
- Protected routes and middleware

### Trip Management
- Create new travel plans
- Set budgets and dates
- Plan transportation
- Include travel companions
- Build detailed itineraries

### User Interface
- Modern, responsive design
- Navigation bar with user menu
- Clean and intuitive forms
- Mobile-friendly layout

## Contact Information

- **Company**: WeTravel
- **Location**: Split, Croatia
- **Email**: wetravel@gmail.com

## License

This project is licensed under the ISC License. 
