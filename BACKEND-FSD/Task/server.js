import express from "express";

const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// GET: fetch all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST: create a new user
app.post("/users", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  users.push(user);
  res.json(user);
});

// PUT: update a user by id
app.put("/users/:id", (req, res) => {
  let user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  user.email = req.body.email;

  res.json(user);
});

// DELETE: delete a user by id
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  const userExists = users.some(u => u.id == id);

  if (!userExists) {
    return res.status(404).json({ message: "User not found" });
  }

  users = users.filter(u => u.id != id);

  res.send("User deleted successfully");
});

// Start server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});