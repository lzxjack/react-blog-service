import { EggAppConfig, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default () => {
  const config = {} as PowerPartial<EggAppConfig>;


  return config;
};
