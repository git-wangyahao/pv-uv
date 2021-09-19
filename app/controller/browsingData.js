'use strict';


const Controller = require('egg').Controller;

/**
* @controller 用户管理
*/
class BrowsingData extends Controller {
  

    /** 
    * @summary 数据上报
    * @description 
    * @router post /create
    * @consumes applicatoin/json
    * @Request body browsingDataRequest *create
    * @response 200 baseResponse ok
    */  

     async create () {
        const { ctx } = this;
        // 参数校验
        ctx.validate(ctx.rule.browsingDataRequest);
        // 处理参数
        const payload = ctx.request.body || {};
        const res = await ctx.service.browsingData.create(payload);
        ctx.helper.success({ ctx, res });
    }

    /** 
    * @summary 数据统计展示
    * @description 数据统计展示
    * @router get /getData
    * @response 200 baseResponse ok
    */
    async get () {
        const { ctx } = this;
        // 处理参数
        const systemId = ctx.query.systemId
        const res = await ctx.service.browsingData.get();
        let data = null
        if(systemId) {
            data = res.filter( (res) => {
              return res.data_code === systemId
            })
        }else {
            data = res
        }
        ctx.helper.success({ ctx, res: data });
    }

   /** 
    * @summary 根据时间删除数据
    * @description 根据时间删除数据
    * @router get /delData
    * @response 200 baseResponse ok
    */
  async delete () {
    const { ctx } = this;
        // 处理参数
        const res = await ctx.service.browsingData.delete();
        ctx.helper.success({ ctx, res });
    }

    
}

module.exports = BrowsingData;