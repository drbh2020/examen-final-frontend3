import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

const lsFavs = JSON.parse(localStorage.getItem("favs")) || []

export const initialState = {
  favs: lsFavs,
  theme: "light",
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "GET_DENTISTS":
      return { ...state, data: action.payload };
      case "ADD_FAV":
        return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAV": {
      const filterFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
      return { ...state, favs: filterFavs };
    }
    default:
      return state;
    }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_DENTISTS", payload: data }));
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useContextGlobal = () => useContext(ContextGlobal)