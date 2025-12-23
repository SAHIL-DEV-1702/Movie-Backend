const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const movieCtrl = require("../controller/movie.controller")

router.get("/", auth, movieCtrl.getMovies);
router.get("/search", auth, movieCtrl.searchMovies);
router.post("/", auth, role("admin"), movieCtrl.addMovie);
router.put("/:id", auth, role("admin"), movieCtrl.updateMovie);
router.delete("/:id", auth, role("admin"), movieCtrl.deleteMovie);

module.exports = router;
