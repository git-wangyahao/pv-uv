
'use strict';

exports.keys = 'egg_folder';

// egg-swagger-doc 配置信息。
exports.swaggerdoc = {
  dirScanner: './app/controller', // 配置自动扫描的控制器路径。
  // 接口文档的标题，描述或其它。
  apiInfo: {
      title: 'NAPI',  // 接口文档的标题。
      description: 'swagger-ui for NAPI document.',   // 接口文档描述。
      version: '1.0.0',   // 接口文档版本。
  },
  basePath: '/',
  host: "127.0.0.1:7007",
  // schemes: ['http', 'https'], // 配置支持的协议。
  consumes: ['application/json'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
  produces: ['application/json'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
  securityDefinitions: {  // 配置接口安全授权方式。
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
  },
  routers: ['/'],
  enableSecurity: false,  // 是否启用授权，默认 false（不启用）。
  // enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
  routerMap: true,    // 是否启用自动生成路由，默认 true (启用)。
  enable: true,   // 默认 true (启用)。
};

// 数据库配置信息。
exports.sequelize = {
  dialect: 'mysql',   // 数据库类型，支持 mysql，sqlite,mssql,pgsql,oracle。
  timezone: '+08:00', // 保存为本地时区
  host: "192.168.2.200",  // 数据库服务器地址。
  port: 3306, // 数据库连接端口号。
  database: "authority", // 数据库名称。
  username: "xxxxxxxx",   // 数据库登录用户名。
  password: "xxxxxxxx",   // 数据库登录密码。
  define: {
      // freezeTableName: true, // Model 对应的表名将与model名相同。
      cameCased: true,
      underscoredAll: true,
      timestamps: false // 默认情况下，Sequelize会将createdAt和updatedAt的属性添加到模型中，以便您可以知道数据库条目何时进入数据库以及何时被更新（ 确实是太方便了，然而我们一般用不到 ....）。
  }
};


// 配置JWT
exports.jwt = {
  secret: "123456"//自定义 token 的加密条件字符串
};
exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  // domainWhiteList: ['http://localhost:8080'],//允许访问接口的白名单
};
exports.cors = {
  origin:'*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};


// WebSocket
exports.io = {
  init: { }, // passed to engine.io
  namespace: {
    '/': {
      connectionMiddleware: [],
      packetMiddleware: [],
    },
    '/example': {
      connectionMiddleware: [],
      packetMiddleware: [],
    },
  },
};