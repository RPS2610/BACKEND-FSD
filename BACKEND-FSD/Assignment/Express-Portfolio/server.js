const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Portfolio server running at http://localhost:${PORT}`);
});