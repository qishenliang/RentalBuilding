import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from './user.service';
import { LoginForm } from './interface';

@Controller('/api/user')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/login')
  async login(@Body() body: LoginForm) {
    const res = await this.userService.login({
      username: body.username,
      password: body.password,
    });
    if (!res) {
      return { code: 400, data: null, mes: '账号密码错误' };
    }
    return { code: 200, data: res, mes: '登录成功' };
  }

  @Post('/register')
  async register(@Body() body: LoginForm) {
    const res = await this.userService.register({
      username: body.username,
      password: body.password,
    });
    if (!res) {
      return { code: 400, data: null, mes: '账号已存在' };
    }
    return { code: 200, data: res, mes: '注册成功' };
  }
}
