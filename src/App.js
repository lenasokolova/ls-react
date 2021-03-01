import React from "react";
import {useRoutes} from 'hookrouter';
import "./style.css";
import Routers from "./router";



const Header = (props) => {
  return <header id={props.id}>{props.title}, {props.name}</header>;
} 

const Nav = (props) => {
  return <nav><a href="/aktualnosci">aktualnosci</a><a href="/kontakt">kontakt</a></nav>;
}
const Main = (props) => {
  const routeResult = useRoutes(Routers);
  return (<main>{routeResult}</main>);
}

const Aside = () => {
  return <aside>aside</aside>
}

const Footer = (stopka) => {
  return <footer>
  {/* 
  ćwiczenie------
  */}
  (c) {stopka.wyswietlRok ? stopka.rok : "brak roku"},{stopka.author}, {stopka.rok}-0{stopka.miesiac}-{stopka.dzien}
  </footer>
}

export default () => {
  
  return (
    <>
      <Header 
      id= "header1" 
      title= "opis"
      name="tytul naglowka 1"
      />
      <Nav/>
      <Main/>
      <Aside/>
      <Footer
      wyswietlRok = {false}
      author = "Lena"
      rok = "2021"
      miesiac = {3}
      dzien = {12}
      />
    </>
  );
}
