// import { useEffect, useState } from "react";
import CharactersList from "./CharactersList";
import "./characters.css";
import { useSelector } from "react-redux";
function Favorite() {
    const characters = useSelector((state) => state.characters)
    console.log(characters);
  return (
    <div className="innerSec">
      <div className="inner">
        {characters.characterList.map((item, index) => {
          return (
            <CharactersList
              key={index}
              name={item.name}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Favorite;
