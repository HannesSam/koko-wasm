import { useMemo } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import CharacterCard from "./CharacterCard";

import JSZip from "jszip";
import JSZipUtils from "jszip-utils";

export default function SearchContainer() {
  // Get data file './fictional-character-dataset.zip' as blob
  useMemo(async () => {
    JSZipUtils.getBinaryContent(
      "/fictional-character-dataset.zip",
      function (err, data) {
        if (err) {
          throw err; // or handle err
        }

        JSZip.loadAsync(data).then(async function () {
          const zip = await JSZip.loadAsync(data);
          console.log(zip)
        });
      }
    );
  }, []);

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
