"use strict";
const Koa = require('koa');
const app = new Koa();
app.use((ctx, next) => {
    ctx.response.body = 'hello world'
})
module.exports = function(){
	return 'Hello Node';
}
app.listen(3000);
