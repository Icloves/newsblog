import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import NewsCard from '../ui/NewsCard';

export default function NewsPage() {
  const [allNews, setAllNews] = useState([]);
  const [currentSource, setCurrentSource] = useState('Lenta.ru');

  const fetchData = async (source) => {
    try {
      const response = await fetch(`/api/news/rss?source=${source}`);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      //   console.log(response);
      const data = await response.text();
      //   console.log('what FORMAT 1  ------>', data);

      const parser = new DOMParser();
      //   console.log('what FORMAT 2 ------>', parser);
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      //   console.log('what FORMAT 3  ------>', xmlDoc);

      const items = xmlDoc.getElementsByTagName('item');
      const news = [];

      for (let i = 0; i < items.length; i++) {
        const title = items[i].getElementsByTagName('title')[0].textContent;
        const link = items[i].getElementsByTagName('link')[0].textContent;
        const pubDate = items[i].getElementsByTagName('pubDate')[0].textContent;
        news.push({ title, link, pubDate });
      }
      //   console.log('what NEWS ------>', news);
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
