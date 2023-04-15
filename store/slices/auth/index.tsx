import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

export interface UserState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  accessToken: string;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  accessToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<AuthUser>): void => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    unsetUser: (state: UserState): void => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setIsAuthenticated: (
      state: UserState,
      action: PayloadAction<{ isAuthenticated: boolean }>
    ): void => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    setAccessToken: (state: UserState, action: PayloadAction<string>): void => {
      state.accessToken = action.payload;
    },
  },
});

export const { setUser, unsetUser, setAccessToken, setIsAuthenticated } =
  userSlice.actions;

export default userSlice.reducer;
