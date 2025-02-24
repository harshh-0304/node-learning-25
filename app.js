const express = require("express"); // Import express
const app = express(); // Create an express app

// Middleware to parse JSON requests (optional but recommended)
app.use(express.json());

// Test API
// http://localhost:3000/test
app.get("/test", (req, res) => {
    console.log("Test API called...");
    res.send("Hello, test API called...");
});

// Users API
// http://localhost:3000/users
app.get("/users", (req, res) => {
    res.json({
        message: "User API called...",
        data: ["ram", "shyam", "seeta"]
    });
});

// Employees API
// http://localhost:3000/employees
app.get("/employees", (req, res) => {
    res.json({
        message: "Employee API called...",
        data: [
            { id: 1, name: "John Doe", position: "Software Engineer" },
            { id: 2, name: "Jane Smith", position: "Project Manager" },
            { id: 3, name: "Alice Johnson", position: "UX Designer" }
        ]
    });
});

// Server creation
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server started on port number", PORT);
});
