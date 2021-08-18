const express = require('express');
const app = express();
const morganBody = require('morgan-body');
const logs = require('./middlewares');

const routes = require('./routes');

morganBody(app, {
    noColors: true,
    stream: logs
})

app.use(express.json());
app.use(routes);

module.exports = app;
