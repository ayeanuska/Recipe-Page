import React from "react";

const RecipeViewer = ({ recipeData, CloseCard }) => {
  const CloseRecipeViewer = () => {
    CloseCard(false);
  };
  return (
    <div className="viewer-style">
      <img src={recipeData.img} />
      <div className="details">
        <h1>{recipeData.foodName}</h1>
        <div>{recipeData.descr}</div>
        <ul>
          <h2> Ingredients</h2>
          {recipeData.ingredients.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>

        <button onClick={CloseRecipeViewer} className="viewer-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default RecipeViewer;
