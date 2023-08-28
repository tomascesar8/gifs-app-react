import { Col, Container, Row } from "react-bootstrap";
import { styled } from "styled-components";
import Results from "./../components/Results/Results";
import SearchBar from "./../components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import axiosClient from "./../config/axiosConfig";
import { api_key } from "./../constants/constanst";
import useGet from "./../hooks/useGet";

const LateralSearch = styled(Col)`
  min-height: 100vh;
  background-color: tomato;
  display: flex;
  justify-content: center;
`;

const MainPage = () => {
  const [gifs, setGifs, getGifs] = useGet(
    `/trending?api_key=${api_key}&limit=10`
  );
  const [search, setSearch] = useState("");

  const doSearch = async () => {
    try {
      console.log("dosearch - busca y trae data");
      const response = await axiosClient.get(
        `/search?api_key=${api_key}&q=${search}&limit=10`
      );
      console.log("se mandan gifs - setGifs");
      setGifs(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyUp = (e) => {
    console.log("handle 1");
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log("useEffect dosearch/getGifs");
    search.length !== 0 ? doSearch() : getGifs();
  }, [search]);

  return (
    <Container fluid>
      <Row className="bg-light">
        <LateralSearch xs={2}>
          <SearchBar search={search} handleKeyUp={handleKeyUp} />
        </LateralSearch>
        <Col
          xs={9}
          className="d-flex flex-wrap align-items-start justify-content-center mt-2"
        >
          <Results results={gifs} search={search} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
