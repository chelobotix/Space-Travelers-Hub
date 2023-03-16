import { useDispatch, useSelector } from "react-redux";
import style from "./Rocket.module.css";
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
      <div className={`${style.grid}`}>
        <div className={`${style.border}`}>
          <img src={flickr_images[0]} className={`${style.img}`} />
        </div>
        <div className={``}>
          <h3>{rocket_name}</h3>
          <p>
            <span>
              {reserved && (
                <button className={`${style.btn1}`}>Reserved</button>
              )}
            </span>
            {description}
          </p>
          {!reserved ? (
            <button
              className={`${style.btn1}`}
              onClick={() => handleReserveRocket(id)}
            >
              Reserve Rocket
            </button>
          ) : (
            <button className={`${style.btn2}`} onClick={() => handleLeaveReserveRocket(id)}>
              Cancel Reservation
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Rocket;
