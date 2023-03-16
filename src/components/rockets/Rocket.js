import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// import style from './Mission.module.css'
import {
  joinRocket,
  leaveRocket,
} from '../../redux/features/rockets/rocketsSlice';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;
  const dispatch = useDispatch();

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
          <img src={image[0]} alt="rocketImage" className={`${style.img}`} />
        </div>
        <div className={``}>
          <h3>{name}</h3>
          <p>
            <span>
              {reserved && (
                <button className={`${style.btn1}`}>Reserved</button>
              )}
            </span>
            {description}
          </p>
          {!reserved ? (
            <button type="button"
              className={`${style.btn1}`}
              onClick={() => handleReserveRocket(id)}
            >
              Reserve Rocket
            </button>
          ) : (
            <button type="button" className={`${style.btn2}`} onClick={() => handleLeaveReserveRocket(id)}>
              Cancel Reservation
            </button>
          )}
        </div>
      </div>
    </>
  );
};

Rocket.defaultProps = {
  id: '', name: '', description: '', image: '', reserved: '',
};
Rocket.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  reserved: PropTypes.string,
};

export default Rocket;
