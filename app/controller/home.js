'use strict';

const Controller = require('egg').Controller;

/**
* @controller home主页
*/
class Home extends Controller {
    /**  
    * @summary home主页
    * @description h
    * @router get /home （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 selectById 方法 ）。
    */
    async index () {
      const { ctx } = this
      ctx.body =  '你好啊'
    }
}

module.exports = Home;