import { Router } from "express";
import { registerUserController } from "../controllers/createUserController";
import { loginUserController } from "../controllers/loginUserController";

export const routes = (router: Router) => {
    router.post('/user/register', registerUserController)
    router.post('/user/login', loginUserController)
}