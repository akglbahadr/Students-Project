const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (err, results) => {
    if (err) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentsById, [id], (err, results) => {
    if (err) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudents = (req, res) => {
  //using destructuring here to get all of these out of the body
  const { name, email, age, dob } = req.body;
  //check if email already exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists!");
    }
  });
};

module.exports = {
  getStudents,
  getStudentsById,
  addStudents,
};
