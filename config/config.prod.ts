import { EggAppConfig, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default () => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.cookies = {
    httpOnly: true,
    sameSite: 'none',
    secure: true 
  };

  return config;
};
