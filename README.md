# 📘 **Simple Notes App (React + Django)**

A minimal yet fully functional **Notes Application** built using a **Django REST Framework backend** and a **React.js frontend**.
This project supports user **authentication**, creating notes, deleting notes, and viewing all notes associated with the logged-in user.

This is my **first full-stack project** using both **React** for frontend and **Django** for backend.

---

## 🚀 **Features**

### ✅ Core Features

* Create personal notes
* Delete notes
* View all notes of the logged-in user
* Notes stored securely in Django database

### 🔐 Authentication

* User registration
* Login
* Token-based authentication using **JWT**
* Protected API endpoints

### 🧩 Tech Stack

#### **Frontend (React)**

* React.js (Vite)
* Axios for API communication
* React Router (optional)
* Custom CSS

#### **Backend (Django)**

* Django
* Django REST Framework
* Simple JWT Authentication
* SQLite / PostgreSQL

---

## 🏗️ **Project Structure**

### **Backend (Django)**

```
/backend
    ├── notes_app
    ├── users
    ├── manage.py
```

### **Frontend (React)**

```
/frontend
    ├── src
    │    ├── components
    │    ├── pages
    │    ├── styles
    ├── package.json
```

---

# ⚙️ **Setup Instructions**

## ▶️ **1. Clone the Project**

```bash
git clone https://github.com/your-username/simple-notes-app.git
cd simple-notes-app
```

---

# 🖥️ **Backend Setup (Django)**

### 1️⃣ Create virtual environment

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

### 2️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 3️⃣ Apply migrations

```bash
python manage.py migrate
```

### 4️⃣ Run server

```bash
python manage.py runserver
```

Backend runs at:
👉 **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**

---

# 🌐 **Frontend Setup (React)**

### 1️⃣ Install dependencies

```bash
cd frontend
npm install
```

### 2️⃣ Start development server

```bash
npm run dev
```

Frontend runs at:
👉 **[http://localhost:5173/](http://localhost:5173/)**

---

# 🔗 **Connecting Frontend & Backend**

Update your `api.js` file with your backend URL:

```js
export default axios.create({
  baseURL: "http://127.0.0.1:8000",
});
```

---

# 📝 **How to Use**

1. Register a new account
2. Login to get JWT token
3. Use the UI to:

   * Create a new note
   * View existing notes
   * Delete notes
4. Notes automatically refresh after actions

---

# 🛠️ **Future Improvements**

* Edit notes
* Add search functionality
* Add categories/tags
* Improve UI/UX
* Dark mode

---

# 🤝 **Contributing**

Pull requests are welcome!
For major changes, please open an issue first.

---

# ⭐ **Show Support**

If you liked this project, consider giving the repository a **star ⭐ on GitHub**!

---
