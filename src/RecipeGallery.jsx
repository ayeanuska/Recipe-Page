import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeViewer from "./RecipeViewer";

const recipes = [
  {
    img: "https://www.amuserecipes.com/wp-content/uploads/2024/10/What-is-the-difference-between-Jhol-and-Momo-1.webp",
    foodName: "M0 : M0",
    intro: "Delicious nepalese dumplings",
    descr:
      "Momo is a delicious and popular dumpling filled with a variety of savory fillings typically served with a spicy dipping sauce.",
    ingredients: [
      "Dumpling Wrappers",
      "Ground Chicken or Pork",
      "Onions",
      "Garlic",
      "Ginger",
      "Cabbage",
      "Coriander",
      "Olive Oil",
      "Spices",
      "Peanuts",
    ],
  },

  {
    img: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-tall-FS-0204.jpg",
    foodName: "Spagetti Bolognese",
    intro: "Traditional Spagetti bolognese",
    descr:
      "Spaghetti Bolognese is a rich and flavorful pasta dish with ground beef, tomatoes, and a blend of aromatic herbs.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomatoes", "Garlic", "Onions"],
  },
];
const showRecipe = false;
const RecipeGallery = () => {
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({
    img: "",
    foodName: "",
    intro: "",
  });
  return (
    <div>
      <h1>Recipe Gallery</h1>

      <div className="gallery-style">
        {recipes.map((item, index) => (
          <RecipeCard
            key={index}
            item={item}
            OpenCard={setShowRecipe}
            updateRecipe={setSelectedRecipe}
          />
        ))}
      </div>

      {showRecipe ? (
        <RecipeViewer
          recipeData={{ ...selectedRecipe }}
          CloseCard={setShowRecipe}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default RecipeGallery;
