const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo,searchToDo } = require("../controllers/ToDoController");

// let cors = require("cors");
// app.use(cors());

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);
router.get("/search", searchToDo);


module.exports = router;
