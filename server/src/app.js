const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./router/auth.router');
const tokensRouter = require('./router/tokens.router');
const newsRouter = require('./router/news.router');

const app = express();

app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/tokens', tokensRouter);
app.use('/api', authRouter);
app.use('/api/news', newsRouter);

module.exports = app;
