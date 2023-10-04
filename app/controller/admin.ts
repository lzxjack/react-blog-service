import { Controller } from 'egg';

export default class AdminController extends Controller {
  public async login() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    const res = await service.admin.login(data);
    ctx.body = res;
  }
}
