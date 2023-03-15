import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

const Profile = () => {
  const state = useSelector((state) => state.missions);
  let filterMissions = null;

  if (!state.missionsArray) {
    return <h2>Nothing selected, Please select some Rockets and Missions First</h2>;
  }
  filterMissions = state.missionsArray.filter((mission) => mission.reserved);

  return (
    <div>
      <div>
        <h2>My Missions</h2>
        <ul>
          {filterMissions.length > 0
            ? filterMissions.map((mission) => <li key={uuidv4()}>{mission.mission_name}</li>)
            : <li>No Missions Joined</li>}
        </ul>
      </div>
      <div />
    </div>
  );
};

export default Profile;
