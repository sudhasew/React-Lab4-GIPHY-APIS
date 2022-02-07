import { SearchForm } from "./SearchForm";
import { ResultsList } from "./ResultsList";
import { useEffect, useState } from "react";
import { getSearchGif, getTrendingGif } from "./services/GiphyApis";
// import axios from "axios";
import { model } from "./Result";
import { Result } from "./Result";
export function Main() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  function setSearch(search: string) {
    setSearchTerm(search);
  }
  //   useEffect(() => {
  //     getTrendingGif().then((data: any) => setGifs(data));
  //     //getSearchGif(searchTerm).then((data) => setSearchTerm(data));
  //   }, []);

  return (
    <div>
      <SearchForm onSubmit={(searchTerm) => setSearch(searchTerm)}></SearchForm>
      <ResultsList gifs={gifs}></ResultsList>
      <Result gif={gifs}></Result>
    </div>
  );
}
