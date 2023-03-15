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
      <div>
        <img src={image[0]} alt="rocketImage" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>
          <span>{reserved && <p>Reserved</p>}</span>
          {description}
        </p>
        {!reserved ? (
          <button type="button" onClick={() => handleReserveRocket(id)}>
            Reserve Rocket
          </button>
        ) : (
          <button type="button" onClick={() => handleLeaveReserveRocket(id)}>
            Cancel Reservation
          </button>
        )}
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
