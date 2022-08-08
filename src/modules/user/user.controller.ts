import { Inject, Controller, Post, Body } from '@midwayjs/decorator';
import { UserService } from './user.service';
import { LoginForm } from './interface';

@Controller('/api/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Post('/login')
  async login(@Body() body: LoginForm) {
    console.log(body);

    return await this.userService.login({
      username: body.username,
      password: body.password,
    });
  }

  @Post('/register')
  async register(@Body() body: LoginForm) {
    return await this.userService.register({
      username: body.username,
      password: body.password,
    });
  }
}
