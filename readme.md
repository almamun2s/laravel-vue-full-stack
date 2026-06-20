# Laravel Vue Full Stack Practice Project

A full-stack web application built with **Laravel** as the backend API and **Vue.js** as the frontend SPA. This project is created for learning and practicing modern full-stack development using Laravel and Vue.

---

## 📂 Project Structure

```text
laravel-vue-full-stack/
│
├── backend/     # Laravel REST API
│
└── frontend/    # Vue.js Application
```

### Backend (Laravel)

The `backend` directory contains:

* Laravel API
* Authentication & Authorization
* Database migrations and seeders
* RESTful API endpoints
* Business logic and validations

### Frontend (Vue.js)

The `frontend` directory contains:

* Vue.js Single Page Application (SPA)
* Vue Router
* Axios for API communication
* State management (if applicable)
* Responsive UI

---

## 🚀 Technologies Used

### Backend

* PHP
* Laravel
* MySQL
* Laravel Sanctum
* REST API

### Frontend

* Vue 3
* Vue Router
* Axios
* Tailwind CSS

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/laravel-vue-full-stack.git
cd laravel-vue-full-stack
```

---

## 🔧 Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
composer install
```

Copy environment file:

```bash
cp .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Configure your database in `.env`:

```env
DB_DATABASE=your_database
DB_USERNAME=root
DB_PASSWORD=
```

Run migrations:

```bash
php artisan migrate
```

Start Laravel server:

```bash
php artisan serve
```

Backend will run at:

```text
http://127.0.0.1:8000
```

---

## 🎨 Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create environment file:

```env
VITE_APP_BASE_URL=http://127.0.0.1:8000
```

Start development server:

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

## 🔗 API Communication

The Vue application communicates with the Laravel backend using Axios.

Example configuration:

```javascript
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
  },
});
```

---

## ✨ Features

* User Authentication
* Laravel Sanctum Authentication
* Protected Routes
* RESTful API
* Vue Router Navigation
* Responsive Design
* Form Validation
* CRUD Operations

---

## 🎯 Learning Objectives

This project is intended to practice:

* Building REST APIs with Laravel
* Consuming APIs with Vue.js
* Authentication using Sanctum
* Frontend and backend separation
* SPA architecture
* Full-stack application development

---

## 📝 Status

🚧 Currently under development and used for learning purposes.

---

## 📜 License

This project is open-source and available under the MIT License.
