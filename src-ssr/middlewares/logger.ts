import { ssrMiddleware } from 'quasar/wrappers';
import log from './../logger';

export default ssrMiddleware(({ app, resolve }) => {
  app.all(resolve.urlPath('*'), (req, _, next) => {
    console.log('someone requested:', req.url);
    log(req.url);
    next();
  });
});
