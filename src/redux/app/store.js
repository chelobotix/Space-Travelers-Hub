import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../features/missions/missionsSlice';
import rocketsReducer from '../features/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
