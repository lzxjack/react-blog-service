import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.redirect('/', '/index');
  router.get('/index', controller.home.index);
};
