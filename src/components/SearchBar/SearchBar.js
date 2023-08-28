import "./SearchBar.css";
// import { useState } from "react";
// import axiosClient from "../../config/axiosConfig";
// import { api_key } from "../../constants/constanst";

const SearchBar = ({search, handleKeyUp}) => {
  // const [search, setSearch] = useState("");
  // const doSearch = async () => {
  //   try {
  //     const response = await axiosClient.get(
  //       `/search?api_key=${api_key}&q=${search}`
  //     );
  //     console.log(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleKeyUp = (e) => {
  //   setSearch(e.target.value);
  //   doSearch();
  // };
  return (
    <div className="px-2">
      <form className="input-searchBar">
        <fieldset>
          <legend className="title-search text-warning fw-bolder fs-5">Encontrá tus Gifs favoritos!</legend>
            <input type="text" placeholder="Buscar..." onKeyUp={handleKeyUp} />
        </fieldset>
      </form>
      <h5 className="mt-3 text-break"> 
      {search.length>0?
      (
        <>
        Resultados para: <br/>
        • <span className="text-light fs-4">
          '{search}' 
        </span>
        </>
      )
      : null
      }
      </h5>
    </div>
  );
};

export default SearchBar;


