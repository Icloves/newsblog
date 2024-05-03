import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import axiosInstance from '../../axiosInstance';

export default function NewsCard({ newsItem, user }) {
  const [read, setRead] = useState(false);
  const [saved, setSaved] = useState(false);
  const userId = user.id

  useEffect(() => {
    console.log(user, 'ASFDAS')
    const readStatus = localStorage.getItem(`read_${newsItem.title}`);
    if (readStatus === 'true') {
      setRead(true);
    } else {
      setRead(false);
    }

    const savedStatus = localStorage.getItem(`saved_${newsItem.title}`);
    if (savedStatus === 'true') {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [newsItem.title]);

  const handleReadToggle = () => {
    const newReadStatus = !read;
    setRead(newReadStatus);
    localStorage.setItem(`read_${newsItem.title}`, newReadStatus.toString());
  };

  const handleSaveToFavorite = async (newsItem, user) => {
    console.log(userId, 'asfsadas')
    // const userId = user
    try {
      const savedStatus = localStorage.getItem(`saved_${newsItem.title}`);
      if (savedStatus === 'true') {
        return;
      }
      const response = await fetch('/api/news/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newsItem, userId }),
      });

      // const response = await axiosInstance.post('/news/favorites', newsItem, )
      // console.log(newsItem)
      if (!response.ok) {
        throw new Error('Failed to save to favorites');
      }
      setSaved(true);
      localStorage.setItem(`saved_${newsItem.title}`, 'true');
    } catch (error) {
      console.log(user)
      console.error('Error saving to favorites:', error);
    }
  };
  return (
    <div className="mb-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Card>
              {saved ? (
                <FaBookmark
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer',
                    margin: '10px',
                    scale: '2',
                  }}
                  onClick={() => handleSaveToFavorite(newsItem)}
                />
              ) : (
                <FaRegBookmark
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer',
                    margin: '10px',
                    scale: '2',
                  }}
                  onClick={() => handleSaveToFavorite(newsItem)}
                />
              )}
              <Card.Body>
                <Card.Title style={{ marginRight: '30px'}}>{newsItem.title}</Card.Title>
                <a href={newsItem.link}>Перейти к новости</a>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <p>
                  <strong>
                    {new Date(newsItem.pubDate).toLocaleString('ru-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </strong>
                </p>
                <Button variant={read ? 'danger' : 'secondary'} onClick={handleReadToggle}>
                  {read ? 'Прочитано' : 'Не прочитано'}
                </Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
