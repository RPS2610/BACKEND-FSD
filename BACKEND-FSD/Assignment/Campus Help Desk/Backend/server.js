const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const FILE = path.join(__dirname, "requests.json");

// Middleware
app.use(cors());
app.use(express.json());

// GET all requests
app.get("/api/requests", (req, res) => {
    const data = fs.readFileSync(FILE, "utf8");
    const requests = JSON.parse(data);

    res.json(requests);
});

// GET request by ID
app.get("/api/requests/:id", (req, res) => {
    const data = fs.readFileSync(FILE, "utf8");
    const requests = JSON.parse(data);

    const id = parseInt(req.params.id);

    const request = requests.find(r => r.id === id);

    if (!request) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    res.json(request);
});

// POST new request
app.post("/api/requests", (req, res) => {
    const data = fs.readFileSync(FILE, "utf8");
    const requests = JSON.parse(data);

    const newRequest = {
        id: requests.length > 0
            ? requests[requests.length - 1].id + 1
            : 1,

        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    requests.push(newRequest);

    fs.writeFileSync(
        FILE,
        JSON.stringify(requests, null, 2)
    );

    res.status(201).json(newRequest);
});

// PUT update request
app.put("/api/requests/:id", (req, res) => {
    const data = fs.readFileSync(FILE, "utf8");
    const requests = JSON.parse(data);

    const id = parseInt(req.params.id);

    const index = requests.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    requests[index] = {
        id: id,
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    fs.writeFileSync(
        FILE,
        JSON.stringify(requests, null, 2)
    );

    res.json(requests[index]);
});

// DELETE request
app.delete("/api/requests/:id", (req, res) => {
    const data = fs.readFileSync(FILE, "utf8");
    const requests = JSON.parse(data);

    const id = parseInt(req.params.id);

    const index = requests.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Request not found"
        });
    }

    const deletedRequest = requests.splice(index, 1)[0];

    fs.writeFileSync(
        FILE,
        JSON.stringify(requests, null, 2)
    );

    res.json({
        message: "Request deleted successfully",
        request: deletedRequest
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});