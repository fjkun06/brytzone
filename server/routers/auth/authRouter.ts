import express, { Request, Response } from "express";
import { Schema, model, connect } from "mongoose";
import { deleteUser, login, register, update } from "../../controllers/auth";

export const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/update", update);
authRouter.post("/deleteUser", deleteUser);
