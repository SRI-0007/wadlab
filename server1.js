const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const SECRET = "key123";
let students = [];
app.post("/login", (req, res) => {
  const { user, pass } = req.body;
  if (user === "admin" && pass === "123") {
    const token = jwt.sign({ user }, SECRET, { expiresIn: "1h" });
    return res.json({ message: "Login successful", token });
  }
  res.status(401).json({ message: "Invalid login" });
});
function auth(req, res, next) {
  const header = req.headers["authorization"];
  if (!header) {
    return res.status(401).json({ message: "Token missing" });
  }
  try {
    const token = header.split(" ")[1]; // Bearer token
    jwt.verify(token, SECRET);
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
}
app.post("/students", auth, (req, res) => {
  const student = req.body;
  students.push(student);
  res.json({ message: "Student added", student });
});
app.get("/students", auth, (req, res) => {
  res.json(students);
});
app.put("/students/:id", auth, (req, res) => {
  const id = req.params.id;
  students[id] = req.body;
  res.json({ message: "Student updated", students });
});
app.delete("/students/:id", auth, (req, res) => {
  const id = req.params.id;
  students.splice(id, 1);
  res.json({ message: "Student deleted", students });
});
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
