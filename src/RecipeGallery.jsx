import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeViewer from "./RecipeViewer";

const original_recipes = [
  {
    img: "https://www.amuserecipes.com/wp-content/uploads/2024/10/What-is-the-difference-between-Jhol-and-Momo-1.webp",
    foodName: "MO : MO",
    intro: "Delicious Nepalese dumplings",
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
    recipe:
      "To make momo, mix ground chicken or pork with finely chopped onions, garlic, ginger, cabbage, and spices. Place the filling in dumpling wrappers, fold them into shape, and steam for about 15-20 minutes. Serve with a spicy dipping sauce.",
  },
  {
    img: "https://cdn.stoneline.de/thumbnail/3f/12/g0/1727431220/koreanisches-bibimbap_1920x1920.jpeg",
    foodName: "Bibimbap",
    intro: "Korean mixed rice bowl",
    descr:
      "A bowl of rice topped with sautéed vegetables, a fried egg, and spicy gochujang sauce.",
    ingredients: [
      "Cooked Rice",
      "Spinach",
      "Carrots (julienned)",
      "Zucchini (julienned)",
      "Mushrooms",
      "Fried Egg",
      "Gochujang (Korean chili paste)",
      "Sesame Oil",
      "Soy Sauce",
      "Sesame Seeds",
    ],
    recipe:
      "Sauté spinach, carrots, zucchini, and mushrooms separately. Place cooked rice in a bowl, arrange vegetables on top, add a fried egg, and drizzle with sesame oil and gochujang. Garnish with sesame seeds.",
  },

  {
    img: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-tall-FS-0204.jpg",
    foodName: "Spagetti Bolognese",
    intro: "Traditional Itallian Spagetti bolognese",
    descr:
      "Spaghetti Bolognese is a rich and flavorful pasta dish with ground beef, tomatoes, and a blend of aromatic herbs.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomatoes", "Garlic", "Onions"],
    recipe:
      "Cook spaghetti in boiling salted water. Sauté garlic and onions in olive oil, brown the ground beef, and add tomatoes. Let it simmer and toss the sauce with the cooked pasta. Garnish with Parmesan and fresh herbs.",
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
      "Coconut milk",
      "kaffir lime leaves",
      "Optional Veggies",
      "soy sauce",
      " Brown sugar",
    ],
    recipe:
      "Sauté shallots, garlic, and lemongrass in coconut oil, then stir in red curry paste. Add coconut milk, broth, and spices, and let it simmer. Add your choice of protein, then serve over cooked rice or ramen noodles",
  },

  {
    img: "https://www.thecookierookie.com/wp-content/uploads/2024/05/street-tacos-recipe-2.jpg",
    foodName: "Chicken Tacos",
    intro: "Mexican crunchy chicken tacos",
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
    recipe:
      "Coat chicken thighs in paprika and cumin panko crumbs, then fry or bake until crispy. Serve on warm tortillas with avocado, jalapenos, onions, cheese, and chipotle sauce.",
  },

  {
    img: "https://pinchofyum.com/wp-content/uploads/Shrimp-Tacos-with-Slaw.jpg",
    foodName: "Shrimp Tacos",
    intro: "Light and flavorful shrimp tacos",
    descr:
      "Shrimp cooked with spices, served on tortillas with shredded cabbage, avocado, cilantro, and lime.",
    ingredients: [
      "Shrimp (peeled and deveined)",
      "Corn or Flour Tortillas",
      "Cabbage (shredded)",
      "Avocado (sliced)",
      "Cilantro",
      "Lime",
      "Chipotle Mayo (optional)",
    ],
    recipe:
      "Sauté shrimp in a skillet with spices until cooked. Warm tortillas, and assemble with shrimp, shredded cabbage, avocado slices, cilantro, and a squeeze of lime. Add chipotle mayo for extra flavor.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg",
    foodName: "Supremo Pizza",
    intro: "Delicious supremo pizza",
    descr:
      "classic, super-savory supreme pizza recipe with all your favorite toppings. It’s quick, easy, and satisfying to make at home.",
    ingredients: [
      "Pizza Dough",
      "Fresh Mozzarella Cheese",
      "Tomatoes",
      "Fresh Basil Leaves",
      "Olive Oil",
      "Salt",
      "Black Pepper",
      "Garlic",
      "Parmesan Cheese",
    ],
    recipe:
      "Roll out pizza dough, then top with olive oil, fresh mozzarella, sliced tomatoes, and garlic. Bake until golden, and finish with fresh basil and grated Parmesan.",
  },
  {
    img: "https://www.recipetineats.com/tachyon/2021/08/Garden-Salad_48.jpg?resize=900%2C1260&zoom=1",
    foodName: "Garden Salad",
    intro: "Healthy Garden salad",
    descr:
      "A fresh and light salad with a variety of crisp vegetables, often served with a vinaigrette dressing.",
    ingredients: [
      "Lettuce",
      "Tomatoes",
      "Cucumber",
      "Carrots",
      "Red Onion",
      "Bell Peppers",
      "Radishes",
      "Avocado",
      "Feta Cheese",
      "Croutons",
      "Olive Oil",
      "Salt and Pepper",
    ],

    recipe:
      "Chop fresh vegetables like lettuce, tomatoes, cucumber, and bell peppers. Toss with crumbled feta, croutons, and olives, and drizzle with olive oil, salt, pepper, and optional lemon juice or vinegar.",
  },

  {
    img: "https://www.tasteandtellblog.com/wp-content/uploads/2017/04/Chicken-Caesar-Wraps-tasteandtellblog.com-1.jpg",
    foodName: "Chicken Caesar Wraps",
    intro: "Grilled chicken with Caesar dressing wrapped in a tortilla",
    descr:
      "Grilled chicken, romaine lettuce, Caesar dressing, and Parmesan cheese wrapped in a tortilla.",
    ingredients: [
      "Grilled Chicken (sliced)",
      "Romaine Lettuce",
      "Caesar Dressing",
      "Flour Tortillas",
      "Parmesan Cheese (grated)",
      "Croutons (optional)",
    ],
    recipe:
      "Toss sliced grilled chicken with romaine lettuce, Caesar dressing, and grated Parmesan cheese. Wrap the mixture in a flour tortilla and add croutons for crunch if desired.",
  },

  {
    img: "https://www.allrecipes.com/thmb/-Sjjh-cusi2NBsNkpffKwDKJ-ls=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/229166-grilled-veggie-skewers-DDMFS-008-step3-0d777eb25fca475abfddf0dbc4cce44e.jpg",
    foodName: "Grilled Veggie Skewers",
    intro: "Colorful and healthy veggie skewers",
    descr:
      "A mix of bell peppers, zucchini, cherry tomatoes, and onions grilled to perfection.",
    ingredients: [
      "Bell Peppers",
      "Zucchini",
      "Cherry Tomatoes",
      "Red Onion",
      "Olive Oil",
      "Garlic Powder",
      "Lemon Juice",
      "Salt and Pepper",
    ],
    recipe:
      "Thread chopped vegetables onto skewers, brush with olive oil, and sprinkle with garlic powder, salt, and pepper. Grill for 10-12 minutes, turning occasionally. Serve with a drizzle of lemon juice.",
  },
];

const RecipeGallery = () => {
  const [recipes, setRecepies] = useState(original_recipes);

  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({
    img: "",
    foodName: "",
    intro: "",
  });

  const [searchVariable, setSearchVariable] = useState("");

  const handleOnChange = (event) => {
    setSearchVariable(event.target.value);
    const filtered_recipe = original_recipes.filter((item) =>
      item.foodName.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setRecepies(filtered_recipe);
  };

  const searchTrigger = () => {
    const filtered_recipe = original_recipes.filter((item) =>
      item.foodName.toLowerCase().includes(searchVariable.toLowerCase())
    );

    setRecepies(filtered_recipe);
  };

  return (
    <div className="bg-dark text-white pt-1 gallery-style">
      <h1 className="text-center m-5">Recipe Gallery</h1>
      <div className="searchbar d-flex justify-content-center mb-4">
        <input
          type="text"
          name="search"
          className="form-control w-50"
          placeholder="search here"
          value={searchVariable}
          onChange={handleOnChange}
        />

        <button
          onClick={() => {
            searchTrigger();
          }}
        >
          {" "}
          search
        </button>
      </div>

      <div className="gallery-style row g-4 justify-content-center mt-4 p-1">
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
