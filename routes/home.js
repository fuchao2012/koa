const koaRouter = require("koa-router");
const router = koaRouter();

router.get("/", async (ctx, next) => {
  await ctx.render("home", {
    name: "123",
  });
});

module.exports = router.routes()