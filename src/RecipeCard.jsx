import React from "react";

const RecipeCard = ({ item, OpenCard, updateRecipe }) => {
  const OpenRecipeViewer = () => {
    OpenCard(true);
    updateRecipe(item);
  };
  return (
    <div className="card-style">
      <img src={item.img} />
      <h2>{item.foodName}</h2>
      <h3>{item.intro}</h3>

      <button onClick={OpenRecipeViewer} className="card-button">
        View recipe
      </button>
    </div>
  );
};

export default RecipeCard;
