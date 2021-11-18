import { useMemo } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { SearchTS } from "../SearchImplementations/SearchTS";

import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import { SearchASCWrapper } from "../SearchImplementations/SearchASCWrapper";

export default function SearchContainer() {
  // Create persistent SearchTS instance
  const searchImplementation = useMemo(() => new SearchTS(), []);

  // Get data file './fictional-character-dataset.zip' as blob
  useMemo(async () => {
    try {
      const zip: any = await getAndUnzip("/fictional-character-dataset.zip");
      const data = await convertZipToObject(zip);
      console.log("Downloaded data");
      searchImplementation.loadData(data);
      console.log("Loaded data");
    } catch (error) {
      messUp();
      console.error(error);
    }
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

  const image = new Image();
  image.src = "https://public.axelwickman.com/work/Omegapoint/gif.gif";
  function messUp() {
    const messingUpElement = document.getElementById("messingUp") as HTMLImageElement;
    messingUpElement.style.display = "";
    messingUpElement.style.borderStyle = "solid";
    messingUpElement.src = image.src;
    setTimeout(() => {
      messingUpElement.style.animation = "none";
      messingUpElement.style.borderStyle = "none";
      messingUpElement.src = "";
    }, 3000)
  }

  function handleSearch() {
    const queries = (document.getElementById("search") as HTMLInputElement).value;
    if (queries.length === 0) return [];
    // Split, and remove leading, trailing whitespace
    let queriesArray = queries.split(",");
    queriesArray = queriesArray.map((query) => query.trim());

    console.log("Queries: " + queries);
    try {
      const results = searchImplementation.search(queriesArray);
      console.log(results);
    } catch (error) {
      messUp();
      console.error(error);
    }
  }

  return (
    <>
      <img id="messingUp"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1000000",
          display: "none",
          borderColor: "red",
          borderWidth: "5px",
          borderStyle: "solid"
        }}
      />
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
