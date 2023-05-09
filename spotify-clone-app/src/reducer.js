import { REACT_TOKEN } from "./utils";

export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  playlists: [],
  playing: false,
  item: null,
  token: JSON.parse(localStorage.getItem("token")) || null,
};


export const reducer = (state, action) => {

  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action.user));
      return {
        ...state,
        user: action.user
      };

    case "SET_TOKEN":
      localStorage.setItem("token", JSON.stringify(action.token));
      return {
        ...state,
        token: action.token
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };

    default:
      return state;
  }
};
