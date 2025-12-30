# Contact Form using Appwrite (Practice Project)

This is a simple **Contact Form web application** built using **HTML, CSS, JavaScript**, and **Appwrite** as the backend service.

> ⚠️ **Note:**  
> This project is created **for practice and learning purposes only**, to understand how frontend applications interact with a Backend-as-a-Service (BaaS) platform like Appwrite.

---

## 🚀 Project Features

- Clean and responsive contact form UI
- Stores form data securely in Appwrite Database
- No backend server required
- Hosted as a static website using **GitHub Pages**
- Uses Appwrite Cloud for backend services

---

## 🧠 What is Appwrite?

**Appwrite** is an open-source **Backend-as-a-Service (BaaS)** platform.

It provides ready-to-use backend features such as:
- Authentication
- Databases
- Storage
- Functions
- Hosting
- Realtime APIs

Appwrite helps developers focus on **frontend and logic**, without writing or managing a custom backend server.

---

## ❓ Why use Appwrite in this project?

We use Appwrite because:

- It eliminates the need to build a backend from scratch
- Provides secure APIs to store data
- Works perfectly with static websites
- Easy to integrate using JavaScript
- Ideal for learning real-world backend concepts

In this project, **Appwrite Database** is used to store contact form submissions.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Appwrite Cloud
- GitHub Pages

---

## 📂 Project Structure
```
    contact-form/
    ├── index.html
    ├── app.js
    └── README.md
```


---

## ⚙️ Appwrite Setup (Step-by-Step)

### 1️⃣ Create an Appwrite Project
- Go to https://cloud.appwrite.io
- Create a new project
- Copy the **Project ID**

---

### 2️⃣ Add Web Platform
- Go to **Project Settings → Platforms**
- Add **Web Platform**
- Add your GitHub Pages domain as hostname:  ``` your-username.github.io ```


---

### 3️⃣ Create Database
- Go to **Databases**
- Create a database (e.g. `ContactDB`)

---

### 4️⃣ Create Table (Collection)
- Create a table named `messages`
- Add columns:
  - `name` (string)
  - `phone` (string)
  - `email` (string)
  - `message` (string)

---

### 5️⃣ Set Permissions
- Allow **Create** permission for role:

