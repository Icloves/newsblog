const express = require('express');
const axios = require('axios');
const { Favorite } = require('../../db/models');

const newsRouter = express.Router();

const CACHE_EXPIRATION_TIME = 30 * 30 * 1000;

const cachedData = {};
const lastFetchTime = {};

const fetchNews = async (source) => {
  let url;
  switch (source) {
    case 'ria.ru':
      url = 'https://ria.ru/export/rss2/archive/index.xml';
      break;
    case 'lenta.ru':
      url = 'https://lenta.ru/rss';
      break;
    case 'rbc.ru':
      url = 'https://rssexport.rbc.ru/rbcnews/news/30/full.rss';
      break;
    case 'vedomosti.ru':
      url = 'https://www.vedomosti.ru/rss/news.xml';
      break;
    case 'tvzvezda.ru':
      url = 'https://tvzvezda.ru/export/rss.xml';
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
      cachedData[source] &&
      lastFetchTime[source] &&
      Date.now() - lastFetchTime[source] < CACHE_EXPIRATION_TIME
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

newsRouter.route('/favorites').post(async (req, res) => {
  try {
    const { userId, pubDate, title, link, enclosure_url, imageUrl } = req.body;
    const favorite = await Favorite.create({
      userId,
      pubDate,
      title,
      link,
      enclosure_url,
      imageUrl,
    });
    res.status(201).json(favorite);
  } catch (error) {
    console.error('Ошибка при сохранении:', error);
    res.status(500).send('Произошла ошибка при сохранении избранных новостей');
  }
});

module.exports = newsRouter;
