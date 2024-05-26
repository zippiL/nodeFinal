import express from "express";
import UsersController from "../controllers/userController.js";

const UsersRouter = express.Router();

UsersRouter.get("/", UsersController.getUsers);
UsersRouter.get("/:id", UsersController.getByIDUsers);
UsersRouter.post("/", UsersController.postUsers);
UsersRouter.put("/:id", UsersController.putUsers);
UsersRouter.delete("/:id", UsersController.deleteUsers);

export default UsersRouter;
