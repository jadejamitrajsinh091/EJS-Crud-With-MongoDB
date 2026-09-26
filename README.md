# 👤 EJS & MongoDB CRUD User Management System

A simple CRUD (Create, Read, Update, Delete) User Management System built using Node.js, Express.js, EJS, and MongoDB.



## 🔗 Run / View Project

<a href="https://ejs-crud-with-mongodb.onrender.com/" target="_blank">🚀 View Live Project</a>

## ✨ Features

- ➕ Add New User
- 👀 View All Users
- ✏️ Edit User Details
- 🔄 Update User Details
- 🗑️ Delete User
- 📋 Display Users in Table
- 🗄️ Store Data in MongoDB
- 🎨 EJS Template Rendering
- ⚡ Express.js Server
- 🔐 Environment Variables using dotenv

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- dotenv
- HTML
- CSS
- JavaScript

## 📚 CRUD Operations

### 1. Create

Add a new user with:
- Name
- Email
- Mobile Number

### 2. Read

Fetch all users from MongoDB and display them in a table.

### 3. Update

Edit an existing user's details and save the updated information.

### 4. Delete

Remove an existing user from the MongoDB database.

## 📁 Project Structure

ejs-crud/
│
├── server.js
├── db.js
├── index.ejs
├── package.json
├── package-lock.json
├── .env
└── README.md

## ⚙️ Installation & Setup

### 1. Clone the Repository

git clone YOUR_GITHUB_REPOSITORY_URL

### 2. Go to Project Folder

cd ejs-crud

### 3. Install Dependencies

npm install

### 4. Create .env File

MONGO_URI=your_mongodb_connection_string
PORT=3000

### 5. Start the Server

npm start

### 6. Development Mode

npm run dev

### 7. Open in Browser

http://localhost:3000

## 🗄️ Database

This project uses MongoDB Atlas to store user information.

Each user contains:
- Name
- Email
- Phone

## 🔄 Application Flow

User
↓
EJS Form
↓
Express.js Route
↓
Mongoose
↓
MongoDB Atlas
↓
Database Operation
↓
Updated EJS Page

## 🌐 Routes

| Method | Route | Purpose |
|--------|-------|---------|
| GET | / | Display all users |
| POST | /add | Add new user |
| GET | /edit/:id | Open edit form |
| POST | /update/:id | Update user |
| GET | /delete/:id | Delete user |

## 📦 Dependencies

- express
- mongoose
- ejs
- dotenv

## 🎯 Learning Concepts

- Node.js Server
- Express.js Routing
- EJS Template Engine
- MongoDB Atlas Connection
- Mongoose Schema & Model
- CRUD Operations
- Form Handling
- Dynamic Data Rendering
- Environment Variables
- Database Operations
- HTTP GET & POST Methods

## 👨‍💻 Author

Mitrajsinh Jadeja

## 📌 Note

This project was created for learning and practicing:

Node.js + Express.js + EJS + MongoDB + Mongoose + CRUD Operations
