import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import Rocket from "./Rocket";
import style from "./RocketList.module.css";

const RocketList = () => {
  const state = useSelector((state) => state.rockets);

  if (!state.rocketsArray) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ul>
        {state.rocketsArray.map((rocket) => (
          <li className={`${style.list}`}key={uuidv4()}>
            <Rocket rocket={rocket} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RocketList;
