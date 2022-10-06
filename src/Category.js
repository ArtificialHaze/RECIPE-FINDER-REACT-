import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { List, StyledLink } from "./styles";

const Category = () => {
  return (
    <List>
      <div>
        <StyledLink to={"/cuisine/Italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </StyledLink>
      </div>
      <div>
        <StyledLink to={"/cuisine/American"}>
          <FaHamburger />
          <h4>American</h4>
        </StyledLink>
      </div>
      <div>
        <StyledLink to={"/cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </StyledLink>
      </div>
      <div>
        <StyledLink to={"/cuisine/korean"}>
          <GiChopsticks />
          <h4>Korean</h4>
        </StyledLink>
      </div>
    </List>
  );
};

export default Category;
