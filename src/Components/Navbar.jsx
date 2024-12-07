import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`${state.theme}`}>
      <h1>DH Odontologo</h1>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={handleThemeChange}>
          {state.theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
