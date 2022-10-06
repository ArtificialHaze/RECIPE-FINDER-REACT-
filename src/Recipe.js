import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailWrapper, Info } from "./styles";

const API_KEY = "6c5acae0a1be4273a4e285e30c3e5298";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const getDetails = async () => {
    const data = await (
      await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`
      )
    ).json();
    setDetails(data);
  };

  useEffect(() => {
    getDetails(params.id);
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={`${activeTab === "instructions" ? "active" : ""}`}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={`${activeTab === "ingredients" ? "active" : ""}`}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

export default Recipe;
