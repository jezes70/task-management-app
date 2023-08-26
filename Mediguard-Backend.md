# MediGuard Backend Documentation

Welcome to the official documentation for the MediGuard backend. This documentation provides an overview of the backend functionalities, APIs, and important information about how the system works.

## Table of Contents

1. Introduction
   - Purpose
   - Architecture Overview

2. Getting Started
   - Installation
   - Configuration
   - Running the Backend

3. API Documentation
   - Authentication and Authorization
   - Endpoints
     - User Registration
     - User Login
     - Forgot Password
     - Change Password
     - Create Patient
     - Delete Patient
     - ...

4. Models
   - User
   - Patient
   - Task
   - Admin

5. Middlewares
   - Authentication Middleware
   - Authorization Middleware

6. Utils
   - Notifications
   - Validators

7. Error Codes and Responses
   - Common Error Codes
   - Response Formats

8. Security
   - Data Encryption
   - Authentication Best Practices
   - Authorization Best Practices


## 1. Introduction

### Purpose

The MediGuard backend serves as the core of the MediGuard application, providing functionalities related to user management, patient records, task management, and more. It is designed to handle user authentication, data storage, and communication with the frontend. I used the MVC approach for the development with the View done with React.JS.

### Architecture Overview

The backend is built using Node.js and Express.js with Typescript, with MongoDB as the database for storing user and application data. It follows a modular architecture, separating routes, models, middleware, and utilities for better maintainability and scalability.

## 2. Getting Started

### Installation

To install and set up the MediGuard backend, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install dependencies:
   ```
   cd Backend
   yarn
   ```

3. Create the JavaScript build files by compiling the Typescript code:
   ```
   yarn compile
   ```

4. Configure environment variables by creating a `.env` file (refer to `.env.example` for required variables).

### Running the Backend

To start the backend server, run:

```
yarn dev
```

## 3. API Documentation

### Authentication and Authorization

All requests to the backend APIs require authentication using JSON Web Tokens (JWT). To obtain a JWT, users need to register and get token for authentication.

**Authentication Middleware:** Ensures that only authenticated users and admin can access protected routes.

**Authorization Middleware:** Checks if a user and admin have the necessary permissions to perform certain actions for example, a user cannot delete patients from the application.

### Endpoints

The API provides various endpoints for user management, patient operations, task management, and more. Refer to the detailed API documentation for a complete list of endpoints and their functionalities. [Endpoints Documentation](./Endpoints.md)


## 4. Middlewares

### Authentication Middleware

The authentication middleware is responsible for ensuring that only authenticated users and admin can access certain routes and resources. It uses JSON Web Tokens (JWT) to verify their identity.

Implementation:
```javascript
// File: userAuth.js and adminAuth.js

// Example of authentication middleware using JWT
const jwt = require('jsonwebtoken');
const config = require('../config');

function authenticateToken(req, res, next) {
     const token =
      req.headers.authorization?.split(" ")[1] ||
      req.query.token ||
      req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }
jwt.verify(token, jwtsecret) as MyJwtPayload;
}

```

### Authorization Middleware

The authorization middleware checks whether a user or admin has the required permissions to access a specific resource or perform an action.


## 5. Utils

### Notifications

The notifications utility provides functions to show various types of user notifications, such as email notification messages


### Validators

The validators utility contains functions to validate user inputs, ensuring they meet specific criteria before processing.

Implementation:
```javascript
// File: validators.js

export function validateEmail(email) {
  // email must be in the right format
}

export function validatePassword(password) {
  // password length from 4 characters and above
}
```

## 6. Error Codes and Responses

### Common Error Codes

- `400`: Bad Request - The request was malformed or invalid.
- `401`: Unauthorized - Authentication credentials are missing or invalid.
- `403`: Forbidden - The authenticated user does not have permission.
- `404`: Not Found - The requested resource does not exist.
- `500`: Internal Server Error - An unexpected error occurred on the server.

### Response Formats

Example of a successful response:
```json
{
  "message": true,
  "data": {
    // Data payload
  }
}
```

Example of an error response:
```json
{
  "error": {
    "code": 400,
    "message": "Bad Request"
  }
}
```

## 7. Security

### Data Encryption

Sensitive data was encrypted using strong encryption algorithms before storing it in the database.

### Authentication Best Practices

- Store hashed and salted passwords in the database.

### Authorization Best Practices

- Used role-based access control (RBAC).



