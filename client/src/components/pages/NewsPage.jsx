import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NewsCard from '../ui/NewsCard';

export default function NewsPage() {
  const [allNews, setAllNews] = useState([]);
  const [currentSource, setCurrentSource] = useState('Lenta.ru');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async (source) => {
    try {
      const response = await fetch(`/api/news/rss?source=${source}`);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      const data = await response.text();

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');

      const items = xmlDoc.getElementsByTagName('item');
      const news = [];

      for (let i = 0; i < items.length; i++) {
        const title = items[i].getElementsByTagName('title')[0].textContent;
        const link = items[i].getElementsByTagName('link')[0].textContent;
        const pubDate = items[i].getElementsByTagName('pubDate')[0].textContent;
        const enclosure = items[i].getElementsByTagName('enclosure')[0];
        const imageUrl = enclosure ? enclosure.getAttribute('url') : null;
        news.push({
          title,
          link,
          pubDate,
          imageUrl,
        });
      }
      setAllNews(news);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handlePortalChange = (source) => {
    setCurrentSource(source);
    fetchData(source);
  };

  useEffect(() => {
    fetchData(currentSource);
  }, [currentSource]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      fetchData(currentSource);
    } else {
      const filteredNews = allNews.filter((newsItem) =>
        newsItem.title.toLowerCase().includes(query.toLowerCase())
      );
      setAllNews(filteredNews);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <Button
          variant='warning'
          style={{ marginRight: '10px' }}
          onClick={() => handlePortalChange('ria.ru')}
        >
          ria.ru
        </Button>
        <Button
          variant='warning'
          style={{ marginRight: '10px' }}
          onClick={() => handlePortalChange('Lenta.ru')}
        >
          Lenta.ru
        </Button>
        <Button
          variant='warning'
          style={{ marginRight: '10px' }}
          onClick={() => handlePortalChange('rbc.ru')}
        >
          rbc.ru
        </Button>
        <Button
          variant='warning'
          style={{ marginRight: '10px' }}
          onClick={() => handlePortalChange('vedomosti.ru')}
        >
          vedomosti.ru
        </Button>
      </div>
      <div style={{ marginBottom: '10px', display: 'flex' }}>
        <Form.Control
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Введите запрос для поиска...'
          style={{ marginRight: '10px' }}
        />
        <Button variant='primary' onClick={() => handleSearch(searchQuery)}>
          Поиск
        </Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ alignSelf: 'flex-start', marginBottom: '10px' }}>
          Последние новости из канала: {currentSource}{' '}
        </h1>
        {allNews.map((newsItem, index) => (
          <NewsCard key={index} newsItem={newsItem} />
        ))}
      </div>
    </div>
  );
}
