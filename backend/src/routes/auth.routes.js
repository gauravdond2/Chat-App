import express from "express";
import { login } from "../controllers/auth.controller.js";
const authroute =express.Router();

authroute.get("/login",login)
// This route handles user login requests

export default authroute;