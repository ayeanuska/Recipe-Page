import React from "react";

const RecipeViewer = ({ recipeData, CloseCard }) => {
  const CloseRecipeViewer = () => {
    CloseCard(false);
  };
  return (
    <div className="viewer-style d-flex flex-column align-items-center justify-content-center ">
      <div container>
        <div className="row justify-content-center ">
          <div className="col-12 col-md-4 col-lg-6 ">
            <img src={recipeData.img} className="img-fluid rounded" />
          </div>

          <div className="col-12 col-md-8 col-lg-6 d-flex ">
            <div className="details rounded p-5">
              <h2 className="text-center">{recipeData.foodName}</h2>
              <p>{recipeData.descr}</p>
              <ul>
                <h2 className="text-center m-2"> Ingredients</h2>
                {recipeData.ingredients.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>

              <h2 className="text-center m-2"> Recipe </h2>
              <div>{recipeData.recipe} </div>
              {/* className="viewer-button" */}
              <button
                className="btn btn-danger mt-5 w-100 "
                onClick={CloseRecipeViewer}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeViewer;
