import { EggAppConfig, PowerPartial } from 'egg';
import userConfig from './config.user';
import path from 'path';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = appInfo.name + '123456';

  config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb'
  };

  // cookie
  config.cookies = {
    httpOnly: true,
    sameSite: 'none',
    secure: true
  };

  // https
  config.cluster = {
    https: {
      key: path.join(__dirname, '../app/cert/api.lzxjack.top.key'),
      cert: path.join(__dirname, '../app/cert/api.lzxjack.top_bundle.crt')
    }
  };

  // mongooDB配置
  config.mongoose = {
    url: 'mongodb://124.220.38.92/react-blog-test',
    options: {}
  };

  // csrf安全
  config.security = {
    csrf: {
      enable: false
    }
  };

  return { ...config, ...userConfig };
};
