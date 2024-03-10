const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.post('/createStudent', (req, res) => {
  const sql = "INSERT INTO student (name, email) VALUES (?, ?)";
  const values = [
    req.body.name,
    req.body.email
  ];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting student:", err);
      return res.status(500).json({ error: "An error occurred while creating the student" });
    }
    console.log("Student created successfully:", result);
    return res.json({ message: "Student created successfully", studentId: result.insertId });
  });
});

app.put('/updateStudent/:id', (req, res) => {
  const sql = "UPDATE student SET name= ?, email= ? WHERE id= ?";
  const values = [
    req.body.name,
    req.body.email
  ];
  const id = req.params.id;

  db.query(sql, [...values, id], (err, result) => {
    if (err) {
      console.error("Error updating student:", err);
      return res.status(500).json({ error: "An error occurred while updating the student" });
    }
    console.log("Student updated successfully:", result);
    return res.json({ message: "Student updated successfully", studentId: result.insertId });
  });
});

app.delete('/Student/:id', (req, res) => {
  const sql = "DELETE FROM student WHERE id= ?";
  const id = req.params.id;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting student:", err);
      return res.status(500).json({ error: "An error occurred while deleting the student" });
    }
    console.log("Student deleted successfully:", result);
    return res.json({ message: "Student deleted successfully", studentId: result.insertId });
  });
});
app.listen(8081, () => {
  console.log("listening..");
});
