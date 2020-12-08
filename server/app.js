const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

const {getCategorys, addCategory, updCategory} = require('./controller/categorys');
const {getLists, addLists, delLists} = require('./controller/lists');
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

router.get('/lists', mustBeAuthenticated, getLists);
router.post('/lists', mustBeAuthenticated, addLists);
router.delete('/lists', mustBeAuthenticated, delLists);

app.use(router.routes());

module.exports = app;

