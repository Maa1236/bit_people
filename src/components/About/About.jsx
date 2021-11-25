import React from "react";
import { useEffect } from "react";
import "./About.css";
import { AboutContent } from "../AboutContent/AboutContent";


export const About = ({setHideSearch, setHideButtons}) => {

  useEffect(() => {
    setHideSearch(false)
    setHideButtons(false);
      }, [setHideSearch, setHideButtons]);

  return (
      <AboutContent />
  );
};
