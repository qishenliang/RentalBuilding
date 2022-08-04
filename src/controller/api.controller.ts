import { Inject, Controller } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;
}
