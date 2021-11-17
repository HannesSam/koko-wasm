import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import CharacterCard from "./CharacterCard";

export default function SearchContainer() {
  //State här som håller koll på resultatet från sökningen
  //Kanske även kalla på unzip här?

  return (
    <>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl placeholder="Charachter traits (Comma seperated list)" />
            <Button variant="outline-secondary">Search</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <CharacterCard />
        </Col>
        <Col>
          <CharacterCard />
        </Col>
        <Col>
          <CharacterCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <CharacterCard />
        </Col>
        <Col>
          <CharacterCard />
        </Col>
        <Col>
          <CharacterCard />
        </Col>
      </Row>
    </>
  );
}
