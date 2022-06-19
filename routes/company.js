import express from "express";

import { Login, Register } from "../controller/company.js";

const router = express.Router();

router.post("/login", Login);
router.post("/register", Register);
// router.post("/", createPost);
export { router };
