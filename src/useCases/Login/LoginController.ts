import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const token = await this.loginUseCase.execute({ email, password });

      return res.json({ message: "success", token });
    } catch (error) {
      throw new Error(error);
    }
  }
}
