import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper, RecipeCard, Gradient } from "./styles";
import { Link } from "react-router-dom";

const API_URL = "https://api.spoonacular.com/recipes/random";
const API_KEY = "6c5acae0a1be4273a4e285e30c3e5298";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopularProducts = async () => {
    const checkLocalStorage = localStorage.getItem("popular");

    if (checkLocalStorage) {
      setPopular(JSON.parse(checkLocalStorage));
    } else {
      const data = await (
        await fetch(`${API_URL}?apiKey=${API_KEY}&number=10`)
      ).json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  useEffect(() => {
    getPopularProducts();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Popular Recipes</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((p) => {
            return (
              <SplideSlide key={p.id}>
                <RecipeCard>
                  <Link to={`/recipe/${p.id}`}>
                    <p>{p.title}</p>
                    <img src={p.image} alt={p.title} />
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

export default Popular;
