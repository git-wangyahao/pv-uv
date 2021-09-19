/**
  授权拦截中间件
 */
module.exports = options => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization;
    let decode = null
    if (token) {
      try {
        // 解码token
        decode = ctx.app.jwt.verify(token, options.secret);
        
        ctx.request.header.userInfo = decode
        console.log("decode",decode)
        await next();
    
      } catch (error) {
        console.log("error",error)
        ctx.status = 401;
        ctx.body = {
          message: 'token已过期',
        };
        return;
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        message: '没有token',
      };
      return;
    }
  };
};
