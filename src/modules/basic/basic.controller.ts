import { Inject, Controller, Get, Query } from '@midwayjs/decorator';
import { BasicService } from './basic.service';

@Controller('/api/basic')
export class BasicController {
  @Inject()
  basicService: BasicService;

  @Get('/getLocation')
  async getLocation(@Query('code') code: string) {
    return await this.basicService.getLocation(code);
  }
}
