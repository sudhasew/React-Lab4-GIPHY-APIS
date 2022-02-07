import axios from "axios";
import { Result } from "./Result";

export function ResultsList(props: { gifs: any[] }) {
  const apiKey = process.env.REACT_APP_TRENDING_API_KEY;
  axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);
  return (
    <div>
      <h1>Results</h1>
      {props.gifs.map((gif) => (
        <Result key={gif.id} gif={gif}></Result>
      ))}
    </div>
  );
}
