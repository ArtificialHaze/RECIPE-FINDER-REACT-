import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Grid } from "./styles";
import { Link } from "react-router-dom";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "6c5acae0a1be4273a4e285e30c3e5298";

const SearchedProduct = () => {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearchedRecipes = async (name) => {
    const resipces = await (
      await fetch(`${API_URL}?apiKey=${API_KEY}&query=${name}`)
    ).json();
    setSearched(resipces.results);
  };

  useEffect(() => {
    getSearchedRecipes(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searched.map((s) => {
        return (
          <Card key={s.id}>
            <Link to={`/recipe/${s.id}`}>
              <img src={s.image} alt={s.title} />
              <h4>{s.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default SearchedProduct;
