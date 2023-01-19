import { Router } from "express";
import { createUser } from "../useCases/CreateUser";
import { login } from "../useCases/Login";

const router = Router();

router.post("/users/register", createUser);
router.post("/users/login", login);

export { router };
