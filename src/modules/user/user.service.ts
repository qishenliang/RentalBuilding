import { Provide } from '@midwayjs/decorator';
import { LoginForm } from './interface';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { User } from '../../entity/user';
import * as md5 from 'md5';
import { Repository } from 'typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async login({ username, password }: LoginForm) {
    const user = await this.userModel.findOne({
      where: { username, password: md5(password) },
    });
    if (!user) {
      return { code: 400, mes: '账号密码错误' };
    } else {
      return { code: 200, data: user, mes: '登录成功' };
    }
  }

  async register({ username, password }: LoginForm) {
    const getuser = await this.userModel.findOne({
      where: { username },
    });

    const data = {
      username,
      password: md5(password),
      age: null,
    };

    if (getuser) {
      return { code: 400, mes: '账号已存在' };
    } else {
      await this.userModel.save(data);
      return { code: 200, mes: '注册成功' };
    }
  }
}
