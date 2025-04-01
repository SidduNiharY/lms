import express from 'express';
import { getUserProfile, login, register } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post("/register" , register);
router.post("/login" , login);
router.route("/profile").get(isAuthenticated,getUserProfile);

export default router;