'use strict';


const Controller = require('egg').Controller;

/**
* @controller 用户登陆
*/
class Login extends Controller {
  
    /** 
    * @summary 用户登陆
    * @description 用户登陆
    * @router post /login
    * @consumes applicatoin/json
    * @Request body loginUserRequest *login
    * @response 200 baseResponse ok
    */
    async index () {
        const { ctx } = this;
        // 处理参数
        const params = ctx.request.body || {};
        ctx.validate(ctx.rule.loginUserRequest);
        const userPassword = params.userPassword
        const userInfo = await ctx.service.login.index(params);
        if(!userInfo) {
            ctx.helper.success({ ctx, res:'用户名不存在' });
            return false
        }
        const  { user_password } = userInfo
        
        if(userPassword !== user_password) {
            ctx.helper.success({ ctx, res:'密码错误，请重试！！' });
            return false
        }
        const token = this.creatToken(userInfo)
        ctx.helper.success({ ctx, res:{
            token,
            userInfo
        }});
    }
    creatToken(userInfo) {
        const { ctx } = this;
          // 生成token
        const { user_name,user_email } = userInfo
        return ctx.app.jwt.sign({
            user_name,
            user_email
        }, this.app.config.jwt.secret, {
            expiresIn: '1day', // 时间根据自己定，具体可参考jsonwebtoken插件官方说明
        });

    }

}



module.exports = Login;