const express = require('express');
const app = express();
const morganBody = require('morgan-body');
const logs = require('./middlewares');
const errorCatcher = require('./middlewares/errorCatcher');

const routes = require('./routes');

morganBody(app, {
    noColors: true,
    stream: logs
})

app.use(express.json());
app.use(routes);
app.use(errorCatcher);

module.exports = app;
