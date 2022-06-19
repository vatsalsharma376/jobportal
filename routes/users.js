import express from "express";

import { Login, Register } from "../controller/users.js";

const router = express.Router();

// router.get("/", getPosts);
// router.post("/", createPost);

router.post("/login", Login);
router.post("/register", Register);

export { router };
