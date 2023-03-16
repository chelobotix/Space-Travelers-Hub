// import style from './Mission.module.css'

const Rocket = (props) => {
  const { id, rocket_name, description, flickr_images } = props.rocket;
  console.log(props.rocket);
  return (
    <>
      <div>
        <img src={flickr_images[0]} />
      </div>
      <div>
        <h3>{rocket_name}</h3>
        <p>{description}</p>
        <button>Reserve Rocket</button>
      </div>
    </>
  );
};

export default Rocket;
