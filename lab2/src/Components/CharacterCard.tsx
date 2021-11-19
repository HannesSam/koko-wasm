import { useMemo, useState } from "react";
import { Card } from "react-bootstrap";

export default function CharacterCard(props) {
  const [universe, setUniverse] = useState("qm");
  let characterNameClean: string;
  if (props.character !== undefined && props.character !== "") {
    const splitString: string[] = props.character.split("_");
    let characterNameWithTrash = props.character.replaceAll("_", " ");
    characterNameWithTrash = characterNameWithTrash.replaceAll(".txt", " ");
    characterNameClean = characterNameWithTrash.substring(characterNameWithTrash.indexOf(" ") + 1);
    if (universe !== splitString[0]) {
      setUniverse(splitString[0]);
    }
  }

  console.log("/img/" + { universe } + ".png");
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={"/img/" + universe + ".png"} />
      <Card.Body>
        <Card.Title>{characterNameClean}</Card.Title>
        {/* <Card.Text>Info?</Card.Text> */}
      </Card.Body>
    </Card>
  );
}
