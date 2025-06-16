# BFFShop — E-commerce with BFF UI Architecture

This is a **simple e-commerce application** implemented with a **Backend-for-Frontend (BFF)** architecture.  
It comprises **3 components**:

1️⃣ **Client (React)** — The UI layer.  
2️⃣ **BFF (Node/Express)** — Acts as a middleman, tailoring API responses for the UI.  
3️⃣ **API Service (Node/Express + MySQL)** — Core API responsible for accessing the database.

---

## 🔹 Tech Stack

- **Client:** React, Axios
- **BFF:** Node.js, Express, Axios, CORS
- **API Service:** Node.js, Express, MySQL
- **Database:** MySQL
- **Environment:** .env files for credentials

---

## 🔹 Installation & Run

### 1️⃣ Set up MySQL Database first:

- Start MySQL and create a database:
```
CREATE DATABASE bffshop_db;
Import or create a products table:
```
```
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2)
);

INSERT INTO products (name, price) VALUES ('Product A', 9.99), ('Product B', 19.99);
```

4️⃣ Run the Application:
➥ Start API service first:
```
cd api-service
npm start
```
✅ API should be available at http://localhost:6000/products

➥ Start BFF service:
```
cd ../bff
npm start
```
✅ BFF should be available at http://localhost:5000/api/products

➥ Start React application:
```
cd ../client
npm start
```
✅ UI should be available at http://localhost:3000

🔹 Why BFF?
✅ Cleaner API: The BFF lets you customize the API to match exactly what your UI needs.
✅ Security: Your UI talks only to the BFF, not directly to your database service.
✅ Scalable: Allows adding more UI clients (like a mobile app) with their own tailored BFF.

🔹 Notes
The API service must be up first.

The BFF depends on API service.

The React UI depends on the BFF.
