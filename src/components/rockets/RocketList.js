import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rocket from "./Rocket";
import {
  increment,
  fetchRockets,
} from "../../redux/features/rockets/rocketsSlice";

import style from "./RocketList.module.css";

const RocketList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
    console.log(state);
  }, [dispatch]);

  if (!state.rocketsArray) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ul>
        {state.rocketsArray.map((rocket) => (
          <li key={uuidv4()}>
            <Rocket rocket={rocket} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RocketList;
