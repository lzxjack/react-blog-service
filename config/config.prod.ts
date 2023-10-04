import { EggAppConfig, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default () => {
  const config = {} as PowerPartial<EggAppConfig>;

  // mongooDB配置
  config.mongoose = {
    url: 'mongodb://124.220.38.92/react-blog',
    options: {}
  };

  // csrf安全
  config.security = {
    csrf: {
      enable: true
    }
  };

  return config;
};
