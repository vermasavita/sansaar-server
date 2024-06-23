import Express from "express";
import { getAllCourses } from "../controllers/courseController.js";

const router = Express.Router();

router.route("/courses").get(getAllCourses);

export default router;
