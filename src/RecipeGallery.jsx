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
    intro: "Traditional itallian Spagetti bolognese",
    descr:
      "Spaghetti Bolognese is a rich and flavorful pasta dish with ground beef, tomatoes, and a blend of aromatic herbs.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomatoes", "Garlic", "Onions"],
  },
  {
    img: "https://hot-thai-kitchen.com/wp-content/uploads/2023/05/1-2.jpg",
    foodName: "Khao soi",
    intro: "Thai Coconut Noodle Soup",
    descr:
      "This Thai Coconut Curry Noodle Soup recipe (called Khao Soi) hails from Northern Thailand (Chiang Mai) where the weather stays a bit cooler.  It’s a godsend when time is short or you are feeling a bit lazy, yet you crave something warm, rich, and spicy.",
    ingredients: [
      "Rice noodles or ramen noodles",
      "Protein: chicken, tofu, shrimp or prawns",
      "Coconut oil  or olive oil",
      "Shallot, garlic cloves and lemon grass",
      "Thai Red Curry Paste",
      "Spices",
      " Coconut milk",
      " Chicken stock or veggie broth",
      "kaffir lime leaves",
      "Optional Veggies",
      "soy sauce",
      " Brown sugar",
    ],
  },

  {
    img: "https://www.thecookierookie.com/wp-content/uploads/2024/05/street-tacos-recipe-2.jpg",
    foodName: "Khao soi",
    intro: "Crunchy chicken tacos",
    descr:
      "Chicken thighs coated in a paprika and cumin panko crumb and served with chipotle sauce on tortillas. ",
    ingredients: [
      "Meat of your choice",
      "Avocado",
      "Tortillas",
      "Jalapeno",
      "Onion",
      "Cheese",
      "chipotle sauce",
      "paprika and cumin panko crumb",
    ],
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
