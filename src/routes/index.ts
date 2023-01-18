import { Router } from "express";
import { registerUserController } from "../controllers/createUserController";

export const routes = (router: Router) => {
    router.post('/user/register', registerUserController)
}