import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import CarouselComponent from "./Components/CarouselComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <CarouselComponent />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Who are you quiz</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl placeholder="Charachter traits (Comma seperated list)" />
            <Button variant="outline-secondary">Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
