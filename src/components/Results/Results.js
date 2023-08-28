import "./Results.css";
import { Card } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import axiosClient from "../../config/axiosConfig";
// import { api_key } from "../../constants/constanst";

const Results = ({results, search}) => {
  // const [results, setResults] = useState([]);
  // const getGifsTrend = async () => {
  //   try {
  //     const response = await axiosClient.get(`/trending?api_key=${api_key}&limit=10`);
  //     setResults(response.data.data);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  // useEffect(() => {
  //   getGifsTrend();
  // },[]);
  return (
    <>
      {results.length===0 & search.length>0? 'No hay resultados para tu búsqueda' : results.map((result, index) => (
        <Card key={index} className="m-2" style={{ width: "12rem" }}>
          <Card.Img variant="top" src={result.images.original.url} />
          <Card.Body>
            <Card.Title className="gif-card-title">{result.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  
  );
};

export default Results;
