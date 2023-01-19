import { compareSync } from "bcrypt";
import { IUsersRespository } from "../../repositories/UsersRepository";
import { LoginDTO } from "./LoginDTO";
import { sign } from "jsonwebtoken";

export class LoginUseCase {
  constructor(private userRepository: IUsersRespository) {}

  async execute(data: LoginDTO) {
    const { PRIVATE_KEY, EXPIRES_IN } = process.env;
    const { email, password } = data;

    const user = await this.userRepository.findByEmail(email);

    if (!user || !compareSync(password, user.password)) {
      throw new Error("Invalid credentials");
    }

    const token = sign({ id: user.id }, PRIVATE_KEY, {
      expiresIn: EXPIRES_IN,
    });

    return token;
  }
}
