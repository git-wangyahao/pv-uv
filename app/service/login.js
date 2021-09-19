'use strict';

const Service = require('egg').Service;


class Login extends Service {
    async index(params) {
        const { userName } = params
        const ctx = this.ctx;
        return await ctx.model.WyhUsers.findOne({ where: { user_name: userName } });
    }
}

module.exports = Login;