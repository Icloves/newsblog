import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaBookmark } from 'react-icons/fa';

export default function NewsCard({ newsItem }) {
  const [read, setRead] = useState(false);

  useEffect(() => {
    const readStatus = localStorage.getItem(`read_${newsItem.title}`);
    if (readStatus === 'true') {
      setRead(true);
    }
  }, [newsItem.title]);

  const handleReadToggle = () => {
    const newReadStatus = !read;
    setRead(newReadStatus);
    localStorage.setItem(`read_${newsItem.title}`, newReadStatus.toString());
  };

  return (
    <div className="mb-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Card>
              {/* {newsItem.imageUrl && (
                <Card.Img
                  variant='top'
                  style={{ height: 'auto', width: '300px' }}
                  src={newsItem.imageUrl}
                />
              )} */}
              <FaBookmark
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  cursor: 'pointer',
                  margin: '10px',
                  scale: '2',
                }}
              />
              <Card.Body>
                <Card.Title>{newsItem.title}</Card.Title>
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
                <Button
                  variant={read ? 'danger' : 'secondary'}
                  onClick={handleReadToggle}
                >
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
