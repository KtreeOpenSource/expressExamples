# Express Application with Firebase Authentication and Storage

This repository contains the source code to connect an Express app with Firebase for authentication and storage.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Config](#firebaseConfig)
  - [config.js]
- [Usage](#usage)
  - [Create User](#create-user)
  - [Update User](#update-user)
  - [Delete User](#delete-user)
  - [Disable User](#disable-user)
  - [Enable User](#enable-user)
  - [Upload Image](#upload-image)
  - [Get Image](#get-image)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- @firebase/app
- @firebase/storage
- firebase-admin

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KtreeOpenSource/expressExamples.git
   ```

2. Navigate to the project directory:

   ```bash
   cd expressExamples/Firebase
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up Firebase:

   - Create a project in Firebase.
   - Configure the Firebase connection in the config.js file.

5. Start the application:

   ```bash
   npm start
   ```

   The API will be accessible at http://localhost:3000.

## Usage

### Create User

Functionality: Creates a new user in the Firebase Authentication system.

### Update User

Functionality: Updates an existing user's information in the Firebase Authentication system.

### Delete User

Functionality: Deletes an existing user from the Firebase Authentication system.

### Disable User

Functionality: Disables an existing user in the Firebase Authentication system, preventing them from signing in.

### Enable User

Functionality: Enables a previously disabled user in the Firebase Authentication system, allowing them to sign in again.

### Upload Image

Functionality: Uploads an image file to Firebase Storage.

### Get Image

Functionality: Retrieves an image file from Firebase Storage.

```

This readme provides a clear overview of the project's functionalities and how to use them. Each function is described briefly, making it easy for users to understand what each feature does.
