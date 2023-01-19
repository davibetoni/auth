import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, cpf, address } = req.body;

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
        cpf,
        address,
      });

      return res.status(201).json({ message: "User created." });
    } catch (error) {
      throw new Error(error);
    }
  }
}
