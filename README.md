# CodeTrio_Group_project

## About
CodeTrio_Group_project is a full-stack application where students work on both front-end and back-end development. The project involves creating an authenticated API using Node.js, Express, and MongoDB, allowing for full CRUD operations. The front-end is built with React and interacts with the API through AJAX requests and JWT authorization.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine
- MongoDB installed and running locally or a cloud MongoDB service
- Git for version control

## Modules Used
The project uses the following Node.js modules:
- **express**: A fast, unopinionated, minimalist web framework for Node.js.
- **mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: A module that loads environment variables from a `.env` file into `process.env`.
- **bcrypt**: A library to help you hash passwords.
- **jsonwebtoken**: A module to create and verify JSON Web Tokens (JWT) for authentication.

## Setup Instructions

### 1. Clone the Repository
Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Fadhel-SH/CodeTrio_Group_project.git

### 2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

```bash
cd CodeTrio_Group_project
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root of the `server` directory and add the following environment variables:

 ```env
MONGO_URI=mongodb://localhost:27017/CodeTrioDB
JWT_SECRET=your_jwt_secret
PORT=3000
 ```

### 4. Start the Server
Start the Express server:

```bash
npm run start
```

     The server should now be running on `http://localhost:3000`.

### 5. Test the API
You can test the API by sending requests to the available routes using a tool like Postman or Curl.

## Project Structure
```plaintext
     CodeTrio_Group_project/
     ├── server/
     │   ├── config/
     │   │   └── database.js
     │   ├── controllers/
     │   ├── models/
     │   │   └── User.js
     │   ├── routes/
     │   │   └── auth.js
     │   └── index.js
     ├── .env
     ├── .gitignore
     ├── package.json
     └── README.md
```

## Technologies Used
- Node.js
- Express
- MongoDB
- React
- AJAX

## Next Steps
- Implement JWT-based authentication in the back-end.
- Set up React components and routes in the front-end.
- Develop CRUD functionality for additional data entities.
- Deploy the application online.

## License
This project is licensed under the MIT License.

## Contributors
- Your Name
- Team Member 1
- Team Member 2




