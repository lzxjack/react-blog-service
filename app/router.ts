import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  const baseRouter = app.config.baseRouter;
  console.log('637486237', 'baseRouter', baseRouter);

  router.redirect('/', baseRouter + '/test');
  router.get(baseRouter + '/test', controller.test.test);

  // 登录
  router.post(baseRouter + '/login', controller.admin.login);
};
