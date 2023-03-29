import { useEffect, useState } from "react";
import CharactersList from "./CharactersList";
import "./characters.css";
function Characters() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b638eb14e98f899f68a67613544d98d9&hash=2d29aa218da90475815a13c955c01a83"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data.results);
        setCharacter(data.data.results);
      });
  }, []);

  
  return (
    <div className="innerSec">
      <div className="inner">
        {character.map((item, index) => {
          return (
            <CharactersList
              key={index}
              name={item.name}
              image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Characters;
