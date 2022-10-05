import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import SearchForm from './components/SearchForm';
import Results from './components/Results';

function App() {
  return (
    <div >
      <Card>
      <Card.Header>Search App</Card.Header>
      <Card.Body>
        <Container>
          <Col>
            <Row>
              <Card.Title>This is a simple Search App</Card.Title>
              <Card.Text>
                A reliable search app for your complete disposal!
              </Card.Text>
            </Row>

            <Row>
              <SearchForm />
            </Row>

            <Row>
              <Results />
            </Row>
          </Col>
        </Container>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
