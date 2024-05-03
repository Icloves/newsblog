import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function FavoriCard({ fav, deleteHandler, user }) {
  return (
    <div className="mb-4">

            {user?.id === fav.userId &&
            <Card>
              <Card.Body>
                {fav.imageUrl && (
                  <Card.Img
                    variant="top"
                    src={fav.imageUrl}
                    style={{ width: '300px' }}
                  />
                )}

                <Card.Title>{fav.title}</Card.Title>
                <a href={fav.link}>Перейти к новости</a>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <p>
                  <strong>
                    {new Date(fav.pubDate).toLocaleString('ru-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      //   second: '2-digit',
                    })}
                  </strong>
                </p>
                <Button variant="danger" onClick={(e) => deleteHandler(e, fav)}>
                  Удалить
                </Button>
              </Card.Footer>
            </Card>
          }

    </div>
  );
}
