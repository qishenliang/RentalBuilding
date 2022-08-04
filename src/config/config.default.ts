import { MidwayConfig } from '@midwayjs/core';
import { User } from '../entity/user';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1659536414422_8585',
  koa: {
    port: 7001,
  },
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'pank',
        synchronize: false, // 如果第一次使用，不存在表，有同步的需求可以写 true
        logging: false,

        // 配置实体模型
        entities: [User],
      },
    },
  },
} as MidwayConfig;
