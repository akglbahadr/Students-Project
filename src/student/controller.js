const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  //using destructuring here to get all of these out of the body
  const { name, email, age, dob } = req.body;
  //check if email already exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists!");
    }
    //add student to db
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Student added succesfully!");
        console.log("Student Added!");
      }
    );
  });
};

const deleteStudentsById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentsById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("There is no student with this ID!");
    } else
      pool.query(queries.deleteStudentsById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Student deleted succesfully!");
      });
  });
};

const updateStudentsById = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(queries.getStudentsById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("There is no student with this ID!");
    } else
      pool.query(queries.updateStudentsById, [name, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Student Updated Successfully");
      });
  });
};

module.exports = {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudentsById,
  updateStudentsById,
};
