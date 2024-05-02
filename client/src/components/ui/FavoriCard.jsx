import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function FavoriCard({ fav, deleteHandler }) {
  return (
    <div className="mb-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Card>
              <Card.Body>
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
                <Button variant="danger" onClick={deleteHandler}>
                  Удалить
                </Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
