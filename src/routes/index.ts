import { Router } from "express";
import { createUser } from "../useCases/CreateUser";

const router = Router();

router.post("/users/register", createUser);

export { router };
