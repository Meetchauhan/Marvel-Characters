import blank from "../images/blank-image.png";
import "./characterList.css";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/slices/CharactersSlice";

function CharactersList(props) {
  const dispatch = useDispatch();

    console.log(props);
//   function addToFavorite() {
//     dispatch(addFavorite());
//   }
//   console.log(addToFavorite());
  return (
    <div className="wrapper">
      <div
        className="image"
        style={{
          backgroundImage: `url('${props.image}')`,
        }}
      >
        <img src={blank} alt={props.name} />
      </div>
      <div className="content">
        <div className="name">{props.name}</div>
        <div>
          <button onClick={()=>{dispatch(addFavorite(props))}}>Add to favorite</button>
        </div>
      </div>
    </div>
  );
}
export default CharactersList;
