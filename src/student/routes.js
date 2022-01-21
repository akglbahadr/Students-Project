const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentsById);
router.put("/:id", controller.updateStudentsById);
router.delete("/:id", controller.deleteStudentsById);

module.exports = router;
