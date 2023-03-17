import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './Rocket.module.css';

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
        <div className={style.descriptionContainer}>
          <h3 data-testid="rocketName">{name}</h3>
          <p className={style.description}>
            {reserved && (
              <span className={style.reserved}>
                Reserved
              </span>
            )}
            {description}
          </p>
          {!reserved ? (
            <button
              type="button"
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
  id: 0, name: '', description: '', image: null, reserved: false,
};
Rocket.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  reserved: PropTypes.bool,
};

export default Rocket;
