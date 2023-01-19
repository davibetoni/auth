import { Request, Response } from "express";
import { MysqlUserRepository } from "../../repositories/implementation/MysqlUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

async function createUser(req: Request, res: Response) {
  const mysqlUserRepository = new MysqlUserRepository();
  const createUserUseCase = new CreateUserUseCase(mysqlUserRepository);
  const createUserController = new CreateUserController(createUserUseCase);

  await createUserController.handle(req, res);
}

export { createUser };
