import { Request, Response } from "express";
import { MysqlUserRepository } from "../../repositories/implementation/MysqlUserRepository";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";

export async function login(req: Request, res: Response) {
  const userRepository = new MysqlUserRepository();
  const loginUseCase = new LoginUseCase(userRepository);
  const loginController = new LoginController(loginUseCase);

  await loginController.handle(req, res);
}
