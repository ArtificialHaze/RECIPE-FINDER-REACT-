import "./App.css";
import React from "react";
import Pages from "./Pages";
import Category from "./Category";
import Search from "./Search";
import { Nav, Logo } from "./styles";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <div className="App">
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Deliciouso</Logo>
      </Nav>
      <Pages />
      <Search />
      <Category />
    </div>
  );
};

export default App;
