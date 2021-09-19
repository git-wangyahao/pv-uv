'use strict';
// helper.js —— this指向：ctx.helper对象
// 调用：this.ctx.helper

// 分页返回数据处理
exports.formMatShowPage = ({ count,rows },pageSize,current) => {
  return {
    total: count,
    list: rows,
    pageSize,
    current
  }
};

// 数据返回统一响应处理 
exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 0,
    data: res,
    msg,
  };
  ctx.status = 200;
};

// 字符串转数字
exports.toInt = (str) => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}