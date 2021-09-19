'use strict';

module.exports = {
  // 定义统一swagger响应格式
  baseResponse: {
    code: { type: 'integer', required: true, example: 0 },
    data: { type: 'string', example: '请求成功' },
    errorMessage: { type: 'string', example: '请求成功' },
  },
};
