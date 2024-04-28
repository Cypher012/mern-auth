import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialStateProps {
  currentUser: null | Promise<object>;
  loading: boolean;
  error: false;
}

const initialState: InitialStateProps = {
  currentUser: null,
  loading: false,
  error: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const getUsersState = (state: RootState) => state.user;
export const { signInStart, signInSuccess, signInFailure } = UserSlice.actions;

export default UserSlice.reducer;
