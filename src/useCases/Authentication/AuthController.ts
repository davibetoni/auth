import { Request, Response } from "express";
import { AuthUseCase } from "./AuthUseCase";

export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  async handle(req: Request, res: Response) {
    const { token } = req.body;

    try {
      const user = await this.authUseCase.execute({ token });

      res.json({ user });
    } catch (error) {
      throw new Error(error);
    }
  }
}
