'use strict';


const Controller = require('egg').Controller;

/**
* @controller 用户管理
*/
class User extends Controller {
  
    /** 
    * @summary 分页查询用户信息
    * @description 分页查询用户信息
    * @router get /user/getUsersByShowPage
    * @Request header string authorization
    * @request query integer *current eg:1 当前页
    * @request query integer *pageSize eg:10 单页数量
    * @request query string user_name eg: 搜索字符串
    * @response 200 baseResponse ok（ 对应 contract 里面的验证属性，下面会提到 。）
    */
    async getUsersByShowPage () {
        const { ctx } = this;
        // 处理参数
        const query = ctx.query;
        const res = await ctx.service.user.getUsersByShowPage(query);
        ctx.helper.success({ ctx, res });
    }


    /** 
    * @summary 创建用户
    * @description 
    * @router post /user/createUser 
    * @consumes applicatoin/json
    * @Request header string authorization
    * @Request body createUserRequest *createUser
    * @response 200 baseResponse ok
    */  

     async createUser () {
        const { ctx } = this;
        // 参数校验
        ctx.validate(ctx.rule.createUserRequest);
        // 处理参数
        const payload = ctx.request.body || {};
        const res = await ctx.service.user.createUser(payload);
        ctx.helper.success({ ctx, res });
    }

    /** 
    * @summary 更新用户
    * @description  更新用户
    * @router post /user/updateUser 
    * @consumes applicatoin/json
    * @Request header string authorization
    * @Request body updateUserRequest *updateUser
    * @response 200 baseResponse ok
    */  

     async updateUser () {
        const { ctx } = this;
        // 参数校验
        ctx.validate(ctx.rule.updateUserRequest);
        // 处理参数
        const payload = ctx.request.body || {};
        const id = ctx.helper.toInt(payload.id);
        const res = await ctx.service.user.updateUser(id, payload);
        ctx.helper.success({ ctx, res });
    }

    /** 
        * @summary 删除用户
        * @description  删除用户
        * @router delete /user/deleteUser 
        * @consumes applicatoin/json
        * @Request header string authorization
        * @Request path string id 用户id
        * @response 200 baseResponse ok
        */  

    async deleteUser () {
        const { ctx } = this;
        // 参数校验
        console.log("ctx",ctx.params.id)
        /**
         * 如果校验 query 参数则传出第二个参数ctx.query
         * 如果校验 params 参数则传出第二个参数ctx.query
         */
        ctx.validate(ctx.rule.baseRequest, ctx.params);
        
        // 处理参数
        const res = await ctx.service.user.deleteUser(ctx.params.id);
        ctx.helper.success({ ctx, res });
    }

}

module.exports = User;