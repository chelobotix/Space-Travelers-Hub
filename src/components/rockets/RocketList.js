import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import style from './RocketList.module.css';

const RocketList = () => {
  const state = useSelector((state) => state.rockets);

  if (!state.rocketsArray) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={style.rocketsContainer}>
      <ul className={style.ul}>
        {state.rocketsArray.map((rocket) => (
          <li key={uuidv4()}>
            <Rocket
              id={rocket.id}
              name={rocket.rocket_name}
              description={rocket.description}
              image={rocket.flickr_images}
              reserved={rocket.reserved}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RocketList;
