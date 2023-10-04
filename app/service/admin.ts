import { Service } from 'egg';

export default class AdminService extends Service {
  async login(body) {
    const { ctx } = this;
    const res = await ctx.model.Admin.create(body);
    return res;
  }
}
