const Router = require("koa-router");

//创建路由
const router = new Router();


//home路由
router.use('/', require("./home"));



//导出
module.exports = router.routes();