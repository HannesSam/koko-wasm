import { Card } from "react-bootstrap";

export default function CharacterCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Character</Card.Title>
        <Card.Text>Info?</Card.Text>
      </Card.Body>
    </Card>
  );
}
