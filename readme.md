# Employee Management System (EMS)

A comprehensive full-stack web application for efficiently managing employee records, organizational data, and personnel information with user authentication and advanced filtering capabilities.

## Tech Stack

- **Frontend:** React 18+ with React Router, Axios
- **Backend:** Node.js with Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS3/Tailwind CSS

## Features

- ✅ **Employee Management:** Create, read, update, and delete employee records
- ✅ **Advanced Search & Filtering:** Filter by department, salary range, status, and more
- ✅ **User Authentication:** Secure login/logout with JWT tokens
- ✅ **Dashboard:** Visual overview of employee statistics
- ✅ **Data Validation:** Client and server-side input validation
- ✅ **Responsive Design:** Mobile-friendly interface

## Getting Started

### Prerequisites

- Node.js (v14+) and npm installed
- MongoDB (v4.4+) running locally or cloud connection string (MongoDB Atlas)
- Git for version control

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd EMS

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### Environment Setup

Create a `.env` file in the server directory:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

### Running the Application

```bash
# Start backend server (runs on port 5000)
npm start

# In another terminal, start frontend (runs on port 3000)
cd client
npm start
```

## Project Structure

```
EMS/
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── client/
│   ├── src/
│   ├── components/
│   └── pages/
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add YourFeature'`)
4. Push to branch and create a Pull Request

## License

MIT License - See LICENSE file for details
