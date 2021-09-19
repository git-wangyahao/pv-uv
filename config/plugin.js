'use strict';

// 配置 egg-swagger-doc 插件信息。
exports.swaggerdoc = {
    enable: true,   // 是否启用。
    package: 'egg-swagger-doc', // 指定包名称。
};

// 配置 egg-sequelize 插件信息。
exports.sequelize = {
    enable: true, // 是否启用。
    package: 'egg-sequelize', // 指定包名称。
    
};


// 开启 egg-validate 插件

exports.validate = {
    enable: true,
    package: 'egg-validate',
};

// 使用egg-jwt
exports.jwt = {
    enable: true,
    package: "egg-jwt"
};

// 使用egg-cors
exports.cors = {
    enable: true,
    package: "egg-cors"
};

// 错误处理
exports.onerror = {
    html(err, ctx) {
        // html hander
        ctx.body = '<h3>error</h3>';
        ctx.status = 500;
    },
    json(err, ctx) {
        // json hander
        ctx.body = { message: 'error' };
        ctx.status = 500;
    },
}

// WebSocket 
exports.io = {
    enable: true,
    package: 'egg-socket.io',
};


