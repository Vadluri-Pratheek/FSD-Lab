# Assignment 3: Backend Integration (Node.js & Express)

- **Course:** CS1303 - Full Stack Development (FSD Lab)
- **Department:** Computer Science & Engineering, NIT Warangal
- **Student Name:** Pratheek
- **Semester:** 5th Semester

---

## 1. Project Overview

In this assignment, I extended my previous Assignment 2 React portfolio by building a custom Node.js/Express backend inside the `/server` folder. 

Key updates I made in this assignment:
1. Removed the hardcoded `projects.js` array from the frontend and moved it to the backend (`/server/data/projects.js`).
2. Created REST API endpoints using Express to serve all projects and individual project details dynamically.
3. Connected the React `ContactForm` component to submit messages to `POST /api/contact` instead of just running client-side checks.
4. Added server-side validation (checking for missing fields and valid `@` in emails).
5. Added proper loading spinners/messages and error handling across all frontend pages so if the server goes down, the app shows a clean error message instead of crashing.

---

## 2. How to Run the Project

You need two terminals open to run both servers locally.

### Step 1: Start the Backend (Express)
```bash
cd server
npm install
npm run dev
```
The server will start on `http://localhost:5000` (read from `.env`).

### Step 2: Start the Frontend (React + Vite)
Open a new terminal in the main project folder:
```bash
npm install
npm run dev
```
The React frontend will start on `http://localhost:5173`.

---

## 3. Environment Setup (`.env.example`)

I used the `dotenv` package to avoid hardcoding the port or client URLs. 

Create a `.env` file inside the `server/` directory:
```env
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
```

---

## 4. Storage Decision & Open Endpoint Note

- **Storage Choice:** As allowed in the assignment instructions, I used an **in-memory JavaScript array** (`contactSubmissions`) inside `server/index.js` to store contact submissions. No external database was required.
- **Open Endpoint Notice:** The `GET /api/contact` endpoint has no authentication so that the evaluator/TA can easily view all received submissions during grading.

---

## 5. API Endpoints Table

| Method | Route | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Basic server health check | `200` |
| `GET` | `/api/projects` | Returns array of all projects | `200` |
| `GET` | `/api/projects/:id` | Returns single project by ID | `200` (or `404` if not found) |
| `POST` | `/api/contact` | Receives and validates contact form | `201` (or `400` on bad input) |
| `GET` | `/api/contact` | Returns all saved submissions | `200` |
| `ALL` | `*` | Catch-all for undefined routes | `404` |

---

## 6. Testing Endpoints with cURL (Tasks B1 – B7)

You can copy and run these curl commands in the terminal to test all backend routes, including the required failure test cases:

### B1. Server Health Check
```bash
curl -X GET http://localhost:5000/
```
*Expected Output (200 OK):*
```json
{
  "status": "ok",
  "message": "Portfolio API is running smoothly!"
}
```

---

### B2. Fetch All Projects
```bash
curl -X GET http://localhost:5000/api/projects
```
*Expected Output (200 OK):* Returns JSON array of all project objects with `id`, `title`, `description`, `techStack`, `image`, and `link`.

---

### B3. Fetch Single Project by ID
**Success Case (Valid ID = 1):**
```bash
curl -X GET http://localhost:5000/api/projects/1
```
*Expected Output (200 OK):* Returns the project object for ID 1.

**Failure Case (Non-existent ID = 999):**
```bash
curl -X GET http://localhost:5000/api/projects/999
```
*Expected Output (404 Not Found):*
```json
{
  "error": "Project not found"
}
```

---

### B4. Submit Contact Form
**Success Case (Valid data):**
```bash
curl -X POST http://localhost:5000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Pratheek\",\"email\":\"student@nitw.ac.in\",\"message\":\"Checking the contact API\"}"
```
*Expected Output (201 Created):*
```json
{
  "message": "Contact submission received successfully!",
  "data": {
    "id": 1,
    "name": "Pratheek",
    "email": "student@nitw.ac.in",
    "message": "Checking the contact API"
  }
}
```

**Failure Case 1 (Missing required fields):**
```bash
curl -X POST http://localhost:5000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Pratheek\"}"
```
*Expected Output (400 Bad Request):*
```json
{
  "error": "All fields (name, email, message) are required"
}
```

**Failure Case 2 (Email missing '@'):**
```bash
curl -X POST http://localhost:5000/api/contact -H "Content-Type: application/json" -d "{\"name\":\"Pratheek\",\"email\":\"invalidemail\",\"message\":\"Hello\"}"
```
*Expected Output (400 Bad Request):*
```json
{
  "error": "Please provide a valid email address (must include @)"
}
```

---

### B5. List All Submissions (Verification)
```bash
curl -X GET http://localhost:5000/api/contact
```
*Expected Output (200 OK):* Returns an array of all submitted contact messages.

---

### B6. Centralized 404 Error Handler
**Failure Case (Testing undefined route):**
```bash
curl -X GET http://localhost:5000/api/doesnotexist
```
*Expected Output (404 Not Found in JSON, not HTML):*
```json
{
  "error": "Cannot GET /api/doesnotexist - Route not found"
}
```

---

### B7. CORS Configuration
I installed the `cors` package and passed `CLIENT_ORIGIN` (`http://localhost:5173`) into it. This allows the Vite React frontend to make requests without cross-origin blocking issues in the browser.

