import { Controller } from 'egg';

export default class TestController extends Controller {
  public async test() {
    const { ctx } = this;
    ctx.body = {
      name: 'hello egg'
    };
  }
}
