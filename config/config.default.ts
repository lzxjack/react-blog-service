import { EggAppConfig, PowerPartial } from 'egg';

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
    secure: true
  };

  return config;
};
