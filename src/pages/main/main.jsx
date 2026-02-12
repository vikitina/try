import React from "react";
import styles from './main.module.scss';
import { Link } from "react-router-dom";
import Welcome from "../../components/welcome/welcome";
import Programs from "../../components/programs/programs";
import How from "../../components/how/how";
import Example from "../../components/example/example";
import Stats from "../../components/stat/stat";
import Dealers from "../../components/dealers/dealers";
import Footer from "../../components/footer/footer";


export default function Main(props) {

  return (
    <>
      <Welcome />
      <Programs />
      <How />
      <Example />
      <Dealers />
    </>
  );
}