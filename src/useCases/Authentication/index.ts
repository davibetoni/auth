import { Request, Response } from "express";
import { MysqlUserRepository } from "../../repositories/implementation/MysqlUserRepository";
import { AuthController } from "./AuthController";
import { AuthUseCase } from "./AuthUseCase";

export async function auth(req: Request, res: Response) {
  const mysqlUserRepository = new MysqlUserRepository();
  const authUseCase = new AuthUseCase(mysqlUserRepository);
  const authController = new AuthController(authUseCase);

  await authController.handle(req, res);
}
