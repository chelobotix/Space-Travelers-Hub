import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, fetchMissions } from "../../redux/features/missions/missionsSlice";
import Mission from "./Mission";
import style from './MissionsList.module.css'

const MissionsList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.missions)


  useEffect(() => {
    dispatch(fetchMissions())

  }, [dispatch])

  if (!state.missionsArray) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.border}>Mission</th>
            <th className={style.border}>Description</th>
            <th className={style.border}>Status</th>
            <th className={style.border}></th>
          </tr>
        </thead>
        <tbody>
          {state.missionsArray.map((mission) => <tr key={uuidv4()}><Mission mission={mission} /></tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default MissionsList;
