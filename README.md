# TradeXcamp

 TradeXcamp is a platform for seamless buying, selling, and exchanging of items within the campus
 community. This project is a full-stack web application built with React, Vite, and Tailwind CSS for the frontend, and Node.js, Express, and MongoDB for the backend. It includes user authentication, API routes, and a modern UI.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure user registration, login, and session management.
- **RESTful API:** Well-defined API endpoints for interacting with the backend.
- **Modern Frontend:** Built with Vite(React) for a dynamic user experience.
- **Styling:** Responsive and modern design using Tailwind CSS.
- **Database Integration:** MongoDB for data storage.

## Technologies Used

### Frontend

-   **React:** A JavaScript library for building user interfaces.
-   **Vite:** A fast build tool for modern web projects.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **Redux Toolkit:** For state management.
-   **Firebase:** For authentication, database, and other backend services.

### Backend

-   **Node.js:** A JavaScript runtime environment.
-   **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
-   **MongoDB:** A NoSQL database.
-   **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
-   **bcryptjs:** For hashing passwords.
-   **jsonwebtoken:** For creating and verifying JSON Web Tokens (JWTs) for authentication.
-   **cookie-parser:** Parse Cookie header and populate `req.cookies`.
-   **dotenv:** Loads environment variables from a `.env` file.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   Node.js (LTS version recommended)
-   npm (Node Package Manager) or yarn
-   MongoDB installed and running, or a MongoDB Atlas account.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shekhar-11/TradeXcamp.git
    cd TradeXcamp
    ```

2.  **Install backend dependencies:**

    ```bash
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    npm install --prefix client
    ```

4.  **Create a `.env` file in the `root` directory** and add your MongoDB URI and JWT Secret:

    ```
    MONGO_URI="YOUR_MONGODB_CONNECTION_STRING"
    JWT_SECRET="YOUR_SUPER_SECRET_KEY"
    ```

5.  **Create a `.env` file in the `client/` directory** and add your Firebase configuration:

    ```
    VITE_FIREBASE_API_KEY="YOUR_FIREBASE_API_KEY"
    ```

### Running the Application

1.  **Start the backend server:**

    ```bash
    npm run dev
    ```
    The backend will run on `http://localhost:3000`.

2.  **Start the frontend development server:**

    ```bash
    npm run dev --prefix client
    ```
    The frontend will run on `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
.
├── api/
│   ├── controllers/         # Handles API logic
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions (e.g., error handling)
│   └── index.js             # Backend entry point
├── client/
│   ├── public/              # Static assets
│   ├── src/                 # React source code
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── firebase.js
│   │   └── main.jsx
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   ├── postcss.config.js    # PostCSS configuration
│   └── index.html           # Frontend entry point
├── .gitignore
├── package.json             # Project dependencies and scripts
├── package-lock.json
└── README.md                # This file
```

## API Endpoints

### Auth Routes
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Log in a user
- `POST /api/auth/google` - Authenticate user via Google
- `GET /api/auth/signout` - Log out user

### Listing Routes
- `POST /api/listing/create` - Create a new listing (requires auth)
- `DELETE /api/listing/delete/:id` - Delete a listing by ID (requires auth)
- `POST /api/listing/update/:id` - Update a listing by ID (requires auth)
- `GET /api/listing/get/:id` - Get a single listing by ID
- `GET /api/listing/get` - Get all listings

### User Routes
- `GET /api/user/test` - Test endpoint
- `POST /api/user/update/:id` - Update user info (requires auth)
- `DELETE /api/user/delete/:id` - Delete user account (requires auth)
- `GET /api/user/listings/:id` - Get listings created by a user (requires auth)
- `GET /api/user/:id` - Get user details (requires auth)

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature/your-feature-name`
3.  Make your changes and commit them: `git commit -m 'feat: Add new feature'`
4.  Push to the branch: `git push origin feature/your-feature-name`
5.  Open a Pull Request.

## License

This project is licensed under the ISC License. 