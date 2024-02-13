# Express MongoDB Employee Management API

This repository contains the source code for an Employee Management API built with Node.js, Express, and MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Create Employee](#create-employee)
  - [Update Employee](#update-employee)
  - [Delete Employee](#delete-employee)
  - [Get Employee by ID](#get-employee-by-id)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/expressMongoDB.git
2. Navigate to the project directory:
    ```bash
   cd expressMongoDB
3. Install dependencies
     ```bash
   npm install
4. Set up MongoDB:

    Create a MongoDB database.
    Configure the MongoDB connection in the mongodb.js file.
5. Start the application:
    ```bash
    npm start
The API will be accessible at http://localhost:3000.
6. Usage
The API supports the following operations:
- Create Employee
```bash
curl -X POST -H "Content-Type: application/json" -d '{"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com", "phoneNumber": "1234567890", "role": "Developer"}' http://localhost:3000/employees
```
- Update Employee
```bash
curl -X PATCH -H "Content-Type: application/json" -d '{"firstName": "Updated", "lastName": "Employee"}' http://localhost:3000/employees/:id
```
- Delete Employee
```bash
curl -X DELETE http://localhost:3000/employees/:id
```
- Get Employee
```bash
curl http://localhost:3000/employees/:id
```
