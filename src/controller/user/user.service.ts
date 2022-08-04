import { Provide } from '@midwayjs/decorator';
import { LoginForm } from './interface';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { User } from '../../entity/user';
import { Repository } from 'typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async login({ username, password }: LoginForm) {
    const user = await this.userModel.findOne({
      where: { username, password },
    });
    return user ? user : null;
  }

  async register({ username, password }: LoginForm) {
    const getuser = await this.userModel.findOne({
      where: { username },
    });
    if (getuser) {
      return null;
    }

    const data = {
      username,
      password,
      age: null,
    };

    await this.userModel.save(data);
    return data;
  }
}
