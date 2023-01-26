import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Karola" },
  { id: "1", name: "Pjetrek" },
  { id: "2", name: "Kicior" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
