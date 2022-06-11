import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: null,
	Admin: [],
	More: [],
};

const GlobalState = createSlice({
	name: "authUser",
	initialState,
	reducers: {
		// createUser: (state, { payload }) => {
		// 	state.currentUser = payload;
		// },


		// Admin: (state) => {
		// 	state.currentUser = null;
		// },
	},
});

export const {
	// createUser,
	// signOut,
} = GlobalState.actions;

export default GlobalState.reducer;
