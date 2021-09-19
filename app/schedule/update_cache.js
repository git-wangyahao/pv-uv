const Subscription = require('egg').Subscription;

module.exports = {
  schedule: {
    cron: '0 0 */8 * * *',
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    const res = await ctx.curl('http://localhost:7001/delData', {
      dataType: 'json',
    });
    console.log("定时任务",res)
  },
};