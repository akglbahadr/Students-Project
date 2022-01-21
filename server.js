const express = require("express");
const studentRoutes = require("./src/student/routes");
const app = express();
const PORT = 3000;

//Allows us to post in to json from our endpoints
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/students", studentRoutes);

app.listen(PORT, () => console.log(`App listening on PORT => ${PORT}`));
