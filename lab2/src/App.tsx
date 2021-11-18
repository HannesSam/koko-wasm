import { Col, Container, Row } from "react-bootstrap";
import CarouselComponent from "./Components/CarouselComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchContainer from "./Components/SearchContainer";
import { useEffect } from "react";

function App() {
  <script type="module" src="https://cdn.jsdelivr.net/npm/@assemblyscript/loader/index.js"></script>

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@assemblyscript/loader/index.js";
    script.async = false;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

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
