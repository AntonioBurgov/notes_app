# Notes Application

This is a simple full-stack web application that allows users to create, view, update, and delete notes. 
It is designed to demonstrate how a frontend built with **React + TypeScript** can communicate with a backend built using **Node.js**, **Express**, 
and **MySQL**.

The app runs entirely on your local machine.


##  What You Can Do With This App 

- Add a new note (title and content)
- View all notes in a list
- Edit an existing note
- Delete a note


##  Technologies Used

### Frontend:
- React (with TypeScript)
- Axios (for HTTP requests)
- CSS (for simple styling)

### Backend:
- Node.js
- Express.js
- MySQL (as the database)
- dotenv (for environment variable management)
- CORS (for frontend-backend communication)


##  Prerequisites

You’ll need the following installed on your computer:

- Node.js
- MySQL Server
- A terminal 


## ✅ Step-by-Step Setup

---

### 🔧 1. Clone the Project

```bash
git clone 
cd notes-app


###  2. Setup the MySQL Database
Open your MySQL command line or tool (like MySQL Workbench).


### Run the following SQL commands:

CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT
);

###  3. Setup the Backend

cd backend
npm install

###  Create a .env file in the backend/ folder:

PORT=5001
DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password  // replace the password with your password
DB_NAME=notes_db

▶ Start the backend server:

node index.js   // If successful, you’ll see:     ✅ Connected to MySQL DB  
                                                  ✅ Server running on port 5001

###  4. Setup the Frontend

cd ../frontend
npm install

npm start

### The front end will opens at : http://localhost:3000

###  How to Use the App

Fill in the title and content fields.

Click "Add Note".

Your note appears in the list below.

Use the Edit or Delete buttons on any note.

###  Contact
If you have any questions, feel free to contact:

Antonio Burgov
📧 antonioburgov04@gmail.com 
🌐 https://github.com/AntonioBurgov