import { useDispatch, useSelector } from "react-redux";
import style from './Rocket.module.css'
import {
  joinRocket,
  leaveRocket,
} from "../../redux/features/rockets/rocketsSlice";

const Rocket = (props) => {
  const { id, rocket_name, description, flickr_images, reserved } =
    props.rocket;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rockets);

  const handleReserveRocket = (id) => {
    dispatch(joinRocket(id));
  };

  const handleLeaveReserveRocket = (id) => {
    dispatch(leaveRocket(id));
  };

  return (
    <>
      <div>
        <img src={flickr_images[0]} />
      </div>
      <div>
        <h3>{rocket_name}</h3>
        <p>
          <span>{reserved && <p>Reserved</p>}</span>
          {description}
        </p>
        {!reserved ? (
          <button onClick={() => handleReserveRocket(id)}>
            Reserve Rocket
          </button>
        ) : (
          <button onClick={() => handleLeaveReserveRocket(id)}>
            Cancel Reservation
          </button>
        )}
      </div>
    </>
  );
};

export default Rocket;
