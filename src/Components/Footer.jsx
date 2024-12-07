//import React from 'react'

import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={`${state.theme}`}>
      <div className="footer-wrapper">
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt="DH-logo" />
      </div>
    </footer>
  );
};

export default Footer;
