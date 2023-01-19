import { IUsersRespository } from "../../repositories/UsersRepository";
import { AuthDTO } from "./AuthDTO";
import { verify, decode } from "jsonwebtoken";

export class AuthUseCase {
  constructor(private userRepository: IUsersRespository) {}

  async execute(data: AuthDTO) {
    const { token } = data;
    const { PRIVATE_KEY } = process.env;

    const payload: any = verify(token, PRIVATE_KEY);

    if (!payload) {
      throw new Error("Unauthenticated");
    }

    const user = await this.userRepository.findById(payload.id);

    if (!user) {
      throw new Error("Unauthenticated");
    }
  }
}
