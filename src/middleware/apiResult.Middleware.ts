import { IMiddleware } from '@midwayjs/core';
import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/koa';

@Middleware()
export class ResultMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const result = await next();
      return {
        code: 200,
        msg: 'OK',
        data: result,
      };
    };
  }

  match(ctx) {
    return ctx.path.indexOf('/api') !== -1;
  }
}
