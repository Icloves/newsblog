const express = require('express');
const axios = require('axios');

const newsRouter = express.Router();

const CACHE_EXPIRATION_TIME = 60 * 60 * 1000;

const cachedData = {};
const lastFetchTime = {};

const fetchNews = async (source) => {
  let url;
  switch (source) {
    case 'ria.ru':
      url = 'https://ria.ru/export/rss2/archive/index.xml';
      break;
    case 'Lenta.ru':
      url = 'https://lenta.ru/rss';
      break;
    case 'rbc.ru':
      url = 'https://rssexport.rbc.ru/rbcnews/news/30/full.rss';
      break;
    default:
      throw new Error('Invalid news source');
  }
  const response = await axios.get(url);
  return response.data;
};

newsRouter.route('/rss').get(async (req, res) => {
  try {
    const { source } = req.query;

    if (
      cachedData[source]
      && lastFetchTime[source]
      && Date.now() - lastFetchTime[source] < CACHE_EXPIRATION_TIME
    ) {
      return res.send(cachedData[source]);
    }

    const data = await fetchNews(source);

    cachedData[source] = data;
    lastFetchTime[source] = Date.now();

    res.set('Content-Type', 'text/xml');
    res.send(data);
  } catch (error) {
    console.error('Error fetching RSS:', error);
    res.status(500).send('Error fetching RSS');
  }
});

module.exports = newsRouter;
