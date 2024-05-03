import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function HomePage({ user }) {
  return (
    <Container fluid="md">
      <Row className="justify-content-center align-items-center">
        <Col md="10" className="text-center">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/07.jpeg"
                alt="First slide"
                style={{ height: '500px', objectFit: 'cover' }}
              />

              <Carousel.Caption>
                <h5></h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/06.png"
                alt="Second slide"
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h5></h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/img/01.jpeg"
                alt="Third slide"
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h5></h5>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        {' '}
        {/* Added margin-top to this row */}
        <Col className="text-center">
          {!user ? (
            <Button as={Link} to={'/login'} variant="dark">
              Войти на сайт
            </Button>
          ) : (
            <Button as={Link} to={'/news'} variant="dark">
              Войти на сайт
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
