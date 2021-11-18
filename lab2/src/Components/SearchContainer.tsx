import { useCallback, useMemo } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { SearchTS } from "../SearchTS";

import JSZip from "jszip";
import JSZipUtils from "jszip-utils";

export default function SearchContainer() {
  // Create persistent SearchTS instance
  const searchImplementation = useMemo(() => new SearchTS(), []);

  // Get data file './fictional-character-dataset.zip' as blob
  useMemo(async () => {
    const zip: any = await getAndUnzip("/fictional-character-dataset.zip");
    const data = await convertZipToObject(zip);
    console.log("Downloaded data");
    searchImplementation.loadData(data);
    console.log("Loaded data");
  }, [searchImplementation]);

  function getAndUnzip(url: string) {
    return new Promise((resolve, reject) => {
      JSZipUtils.getBinaryContent(
        url,
        function (err, data) {
          if (err) reject(err);
          JSZip.loadAsync(data).then(async function () {
            const zip = await JSZip.loadAsync(data);
            resolve(zip);
          });
        }
      );
    })
  }

  async function convertZipToObject(zip: any): Promise<Record<string, string>> {
    let obj = {};
    for (let [name, file] of Object.entries(zip.files)) {
      obj[name] = await (file as any).async("string")
    }
    return obj;
  }

  function handleSearch() {
    const queries = (document.getElementById("search") as HTMLInputElement).value;
    if (queries.length === 0) return [];
    // Split, and remove leading, trailing whitespace
    let queriesArray = queries.split(",");
    queriesArray = queriesArray.map((query) => query.trim());

    console.log("Queries: " + queries);
    const results = searchImplementation.search(queriesArray);
    console.log(results);
  }


  return (
    <>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl placeholder="Charachter traits (Comma seperated list)" id="search"
              onKeyDown={(e: any) => {
                if (e.key === "Enter")
                  handleSearch();
              }
              } />
            <Button variant="outline-secondary" onClick={
              () => {
                console.log("Click")
                handleSearch()
              }
            }>Search</Button>
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
