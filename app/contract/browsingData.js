module.exports = {
  // 获取此文件的校验规则  ctx.validate(ctx.rule.createUserRequest);
  browsingDataRequest: {
    uuid: { type: 'string', required: true, description: '标识用户的唯一id', example: 'sofiyas' ,default:'sofiyas'},
    url: { type: 'string', required: true, description: '访问路径', example: 'sofiyas' ,default:'sofiyas'},
    webName: { type: 'string', required: true, description: '页面title', example: 'sofiyas' ,default:'sofiyas'},
    systemId: { type: 'string', required: true, description: '应用code', example: 'sofiyas' ,default:'sofiyas'},
  },
};

