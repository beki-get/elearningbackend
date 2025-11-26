## Project Overview
This is the **backend for an eLearning platform** that allows instructors to create courses, students to enroll, and administrators to manage the platform.  
The project provides RESTful APIs for all the core functionalities of a modern eLearning system.

## Features
- User Authentication & Authorization (JWT)
- Role-based access: Admin, Instructor, Student
- Course creation, update, and deletion
- Enrollment management
- Lesson and content management (videos, PDFs)
- Quiz and assignment handling
- Payment gateway integration 
- Notifications and email alerts
- Admin dashboard endpoints

## Tech Stack
- **Runtime: Node.js
- **Framework: Express.js
- **Database: PostgreSQL 
- **Authentication:JWT
- **ORM/ODM:Prisma ORM
- **Testing: Jest
- **Environment Management:dotenv

## Installation
1. Clone the repository:
//git clone https://github.com/beki-get/eLearning-backend.git
2.Navigate to the project folder:
//cd eLearning-backend
3.Install dependencies:
//npm install
4.Environment Variables
Create a .env file in the root directory and add the following variables (replace placeholders with your own):
PORT=5000
DATABASE_URL=<your_database_connection_string>
JWT_SECRET=<your_jwt_secret>
EMAIL_HOST=<smtp_host>
EMAIL_PORT=<smtp_port>
EMAIL_USER=<smtp_user>
EMAIL_PASS=<smtp_password>
PAYMENT_API_KEY=<payment_gateway_key>
5.Development
//npm run dev
6.Production
//npm start


