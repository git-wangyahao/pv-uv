module.exports = app => {
  const { router, controller} = app
  router.post('/create', controller.browsingData.create);
  router.get('/getData', controller.browsingData.get);
  router.get('/delData', controller.browsingData.delete);
};