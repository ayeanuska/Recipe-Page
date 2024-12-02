import React from "react";

const RecipeViewer = ({ recipeData, CloseCard }) => {
  const CloseRecipeViewer = () => {
    CloseCard(false);
  };
  return (
    <div className="viewer-style">
      <img src={recipeData.img} />
      <div className="details"></div>
      <h2>{recipeData.foodName}</h2>
      <div>{recipeData.descr}</div>
      <div>{recipeData.ingredients}</div>
      <button onClick={CloseRecipeViewer} className="Viewer-button">
        Close
      </button>
    </div>
  );
};

export default RecipeViewer;
