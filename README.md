# 🔑 Password Generator

A simple and customizable **password generator** built with **React** and styled using **Tailwind CSS**.  
This app allows users to generate secure passwords with configurable length, numbers, and special characters, and copy them directly to the clipboard.

---

## 📑 Table of Contents
- [Introduction](#-introduction)  
- [Features](#-features)  
- [Installation](#-installation)  
- [Usage](#-usage)  
- [Configuration](#-configuration)  
- [Dependencies](#-dependencies)  
- [Examples](#-examples)  
- [Troubleshooting](#-troubleshooting)  
- [Contributors](#-contributors)   

---

## 🚀 Introduction
This project is a React-based password generator. It provides an easy-to-use UI where users can:
- Adjust password length with a slider.
- Include/exclude numbers and special characters.
- Copy generated passwords to their clipboard with a single click.  

The app is styled using Tailwind CSS for a modern, responsive design.

---

## ✨ Features
- ✅ Generate random secure passwords.  
- ✅ Choose password length (8–50 characters).  
- ✅ Optionally include numbers and/or special characters.  
- ✅ One-click "Copy to Clipboard" functionality.  
- ✅ Clean and minimal UI.  

---

## ⚙️ Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/SheikhJawad452/Simple-Password-Generator-React.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Simple-Password-Generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm start
   ```

---

## 🖥 Usage
- Move the **Length slider** to select your desired password length.  
- Check or uncheck **Numbers** and **Characters** to include/exclude them.  
- The password will regenerate automatically whenever settings change.  
- Click the **Copy** button to copy the password to your clipboard.  

---

## 🔧 Configuration
You can modify default settings in `App.jsx`:  
- **Default Length:** `useState(8)`  
- **Allow Numbers by Default:** `useState(false)`  
- **Allow Characters by Default:** `useState(false)`  

---

## 📦 Dependencies
- **React** (hooks: `useState`, `useEffect`, `useCallback`, `useRef`)  
- **Tailwind CSS** (for styling)  

Make sure Tailwind is configured properly in your project for styles to apply.

---

## 🧩 Examples
- **Password of length 12 with numbers:** `aK4dLm9ZqYtP`  
- **Password of length 16 with numbers & symbols:** `B#8n*V2r!qX0^zPl`  

---

## 🛠 Troubleshooting
- **No styles showing up?**  
  Ensure Tailwind CSS is properly installed and configured in your project.  

- **Copy not working?**  
  Some browsers restrict clipboard access. Ensure you’re using the app in a modern browser (Chrome, Edge, Firefox).  

---

## 👨‍💻 Contributors
- **Sheikh Jawad Nasir Hussain** – Developer  

(Open for contributions! Feel free to fork and submit PRs.)

---

