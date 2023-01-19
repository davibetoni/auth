import { User } from "../entities/user";

export interface IUsersRespository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>
}
