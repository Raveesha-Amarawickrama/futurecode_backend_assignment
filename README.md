# Backend Developer Assignment - Future Code Technology

This project is a simple RESTful API built using **Node.js** and **Express**, fulfilling the backend assignment for Future Code Technology.

It includes:
- ✅ User registration and login (no authentication)
- ✅ CRUD operations for a Product model (name, price, quantity)
- ✅ Input validation
- ✅ MongoDB for database operations


## 📁 Project Structure

server/
├── config/ # MongoDB connection setup
├── controllers/ # Route logic (User & Product)
├── models/ # Mongoose schemas
├── routes/ # Express route handlers
├── validation/ # Input validation logic
├── .env # Environment variables
└── server.js # Entry point


---

### 1. Clone the repository

git clone [https://github.com/your-username/backend-assignment.git](https://github.com/Raveesha-Amarawickrama/futurecode_backend_assignment/new/main?filename=README.md)
cd backend-assignment/server

### 2. Install dependencies
npm install

### 3. Running the Server
npm start

 ### API Endpoints
### User Routes
Method	Endpoint	Description
POST	/api/users/register         	Register a new user
POST	/api/users/login	            Login with email and password

 ### Product Routes
POST	/api/products	        Create a new product
GET	/api/products        	 Get all products
GET	/api/products/:id	      Get product by ID
PUT	/api/products/:id	      Update product by ID
DELETE	/api/products/:id 	Delete product by ID

 Tech Stack
Node.js
Express.js
MongoDB & Mongoose
ES Modules
Postman (for testing)

