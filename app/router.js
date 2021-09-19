'use strict';

module.exports = function (app) {
  const { io } = app;
  // require('./router/home')(app);
  // require('./router/user')(app);
  // require('./router/login')(app);
  require('./router/browsingData')(app);

}