import express from "express";
import { login } from "../controllers/auth.controller.js";
const authroute =express.Router();

authroute.get("/login",login)

export default authroute;