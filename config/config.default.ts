import { EggAppConfig, PowerPartial } from 'egg';
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

  config.cookies = {
    httpOnly: true,
    sameSite: 'none',
    secure: false
  };

  config.cluster = {
    https: {
      key: path.join(__dirname, '../app/cert/api.lzxjack.top.key'),
      cert: path.join(__dirname, '../app/cert/api.lzxjack.top_bundle.crt')
    }
  };

  return config;
};
