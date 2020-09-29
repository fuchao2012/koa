const koa = require("koa");
const Router = require("koa-router")();
const ejs = require("ejs"); //模板引擎
const path = require("path"); //path模块
const views = require("koa-views"); //模板呈现中间件
const koaStatic = require("koa-static"); //静态资源加载中间件
const app = new koa();

//配置静态资源加载中间件
app.use(koaStatic(path.join(__dirname, "./public")));

//配置服务端模板渲染引擎中间件
app.use(
  views(path.join(__dirname, "./views"), {
    extension: "ejs",
  })
);
app.use(require("./routes"));
app.use(Router.routes(), Router.allowedMethods());
app.listen(3000);
