const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const fs = require('fs');
const path = require('path');
const cors = require('@koa/cors');

const {getCategorys, addCategory, updCategory, delCategory} = require('./controller/categorys');
const {getLists, addLists, delLists, updLists} = require('./controller/lists');
const {registration} = require('./controller/registration');
const {login, logout, getUserDataBySession, refreshTokens} = require('./controller/authentication');
const {authorization} = require('./controller/authorization');
const mustBeAuthenticated = require('./libs/mustBeAuthenticated');

const app = new Koa();

app.use(cors());
app.use(require('koa-bodyparser')());

const router = new Router({prefix: '/api'});

router.use(authorization);

router.post('/registration', registration);
router.post('/auth/login', login);
router.post('/auth/logout', logout);
router.post('/auth/refresh', refreshTokens);
router.get('/auth/user', getUserDataBySession);

router.get('/categorys', mustBeAuthenticated, getCategorys);
router.post('/categorys', mustBeAuthenticated, addCategory);
router.put('/categorys', mustBeAuthenticated, updCategory);
router.delete('/categorys', mustBeAuthenticated, delCategory);

router.get('/lists', mustBeAuthenticated, getLists);
router.post('/lists', mustBeAuthenticated, addLists);
router.put('/lists', mustBeAuthenticated, updLists);
router.delete('/lists', mustBeAuthenticated, delLists);

app.use(router.routes());

app.use(serve('./public'));

// this for HTML5 history in browser
const index = fs.readFileSync(path.join(__dirname, 'public/index.html'));
app.use(async (ctx, next) => {
    if (!ctx.url.startsWith('/api')) {
    ctx.set('content-type', 'text/html');
    ctx.body = index;
  }
});

module.exports = app;

