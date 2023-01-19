import { User } from "../../entities/user";

export class MysqlUserRepository {
  async findByEmail(email: string): Promise<User> {
    return await User.findOne({ where: { email } });
  }

  async findById(id: string): Promise<User> {
    return await User.findByPk(id);
  }

  async save(user: User): Promise<void> {
    await user.save();
  }
}
