# Expense Tracker Web App

## Description
Expense Tracker is a full-stack web application designed to help users manage their income and expenses effectively. The application provides an intuitive interface to add, edit, and delete transactions, as well as view transaction history with categorized amounts. This project demonstrates modern web development practices with a clean architecture, integrating a Go backend API with a React frontend.

---

## Technologies Used

### Backend
- **Go (Golang)** with **Gin framework** for RESTful API development  
- **GORM** for ORM and database management  
- **PostgreSQL** as the relational database  
- **Railway** for cloud deployment  
- **CORS middleware** for handling cross-origin requests  

### Frontend
- **React** with **TypeScript**  
- **ShadCN UI library** for components like buttons, tables, modals, and popovers  
- **Axios** for API calls  
- **Tailwind CSS** for styling and responsive design  

---

## Features
- **Add Transactions**: Add new income or expense entries with title, amount, and type  
- **Edit Transactions**: Edit existing transactions directly via popover forms  
- **Delete Transactions**: Remove transactions with confirmation modal  
- **Transaction List**: View a detailed list of all transactions with type-based styling  
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS  
- **Backend API**: Full CRUD API with proper error handling and CORS support  

---

## Setup Instructions

Navigate to the frontend folder:

cd ../frontend


Install dependencies:

npm install


Start the development server:

npm run dev


Access the frontend at: http://localhost:5173

## AI Support Explanation

This project was developed with AI-assisted guidance to ensure clean architecture, reusable components, and efficient state management. AI support helped in:

Structuring TypeScript types and interfaces for type safety

Implementing backend CRUD operations with GORM

Designing responsive UI with React and ShadCN components

Debugging issues such as CORS, date formatting, and event handlers

AI assistance allowed for faster prototyping and ensured the application follows best practices in modern web development.

**Author**: Andika Ananda
**License**: MIT