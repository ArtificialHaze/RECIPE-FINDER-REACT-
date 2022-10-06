import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Grid } from "./styles";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "6c5acae0a1be4273a4e285e30c3e5298";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getRecipes = async (name) => {
    const resipces = await (
      await fetch(`${API_URL}?apiKey=${API_KEY}&cuisine=${name}`)
    ).json();
    setCuisine(resipces.results);
  };

  useEffect(() => {
    getRecipes(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((c) => {
        return (
          <Card key={c.id}>
            <Link to={`/recipe/${c.id}`}>
              <img src={c.image} alt={c.title} />
              <h4>{c.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Cuisine;
