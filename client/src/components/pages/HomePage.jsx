import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function HomePage({user}) {
  return (
    <Container fluid="md">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md="6" className="text-center">
          <h1 className="mb-4">Добро пожаловать</h1>
          {!user ? <Button as={Link} to={'/login'} variant="primary">Войти на сайт</Button> 
          : <Button as={Link} to={'/news'} variant="primary">Войти на сайт</Button>}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
