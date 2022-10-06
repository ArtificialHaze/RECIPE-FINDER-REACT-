import React, { useState, useEffect } from "react";
import { Wrapper, RecipeCard, Gradient } from "./styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const API_URL = "https://api.spoonacular.com/recipes/random";
const API_KEY = "6c5acae0a1be4273a4e285e30c3e5298";

const Products = () => {
  const [vegetarian, setVegetarien] = useState([]);

  const getPopularProducts = async () => {
    const checkLocalStorage = localStorage.getItem("vegetarian");

    if (checkLocalStorage) {
      setVegetarien(JSON.parse(checkLocalStorage));
    } else {
      const data = await (
        await fetch(`${API_URL}?apiKey=${API_KEY}&number=10&tags=vegetarian`)
      ).json();
      localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
      setVegetarien(data.recipes);
    }
  };

  useEffect(() => {
    getPopularProducts();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Recipes</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {vegetarian.map((v) => {
            return (
              <SplideSlide key={v.id}>
                <RecipeCard>
                  <Link to={`/recipe/${v.id}`}>
                    <p>{v.title}</p>
                    <img src={v.image} alt={v.title} />
                    <Gradient />
                  </Link>
                </RecipeCard>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Products;
