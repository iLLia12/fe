import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface FESettingsState {
  isLeftSideBarOpen: boolean;
}

const initialState: FESettingsState = {
  isLeftSideBarOpen: true,
};

export const userSlice = createSlice({
  name: 'feSettings',
  initialState,
  reducers: {
    setIsLeftSideBarOpen: (
      state: FESettingsState,
      action: PayloadAction<boolean>
    ): void => {
      state.isLeftSideBarOpen = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.feSettings,
      };
    },
  },
});

export const { setIsLeftSideBarOpen } = userSlice.actions;

export default userSlice.reducer;
