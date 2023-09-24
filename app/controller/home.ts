import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = {
      name: 'egg',
      category: 'framework',
      language: 'Node.js'
    };
  }
}
