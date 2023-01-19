import { Router } from "express";
import { auth } from "../useCases/Authentication";
import { createUser } from "../useCases/CreateUser";
import { login } from "../useCases/Login";

const router = Router();

router.post("/users/register", createUser);
router.post("/users/login", login);
router.post("/auth", auth);

export { router };
