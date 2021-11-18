import { Col, Container, Row } from "react-bootstrap";
import CarouselComponent from "./Components/CarouselComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchContainer from "./Components/SearchContainer";

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
      <SearchContainer />
    </Container>
  );
}

export default App;
