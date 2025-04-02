import express from 'express';
import { getUserProfile, login, logout, register, updateProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post("/register" , register);
router.post("/login" , login);
router.route("/logout").get(logout);
router.route("/profile").get(isAuthenticated,getUserProfile);
router.route("/profile/update").put(isAuthenticated,updateProfile);

export default router;