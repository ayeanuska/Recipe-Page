import React from "react";

const RecipeCard = ({ item, OpenCard, updateRecipe }) => {
  const OpenRecipeViewer = () => {
    OpenCard(true);
    updateRecipe(item);
  };
  return (
    <div className="card col-md-5 col-lg-3 bg-dark text-white p-3">
      <div className="card-style card-body text-center">
        <img src={item.img} />
        <h5 className="card-title p-3">{item.foodName}</h5>
        <p className="card-text">{item.intro}</p>

        <button onClick={OpenRecipeViewer} className="btn btn-success">
          View recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
