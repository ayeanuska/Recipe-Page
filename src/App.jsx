import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecipeGallery from "./RecipeGallery";
// import "bootstrap/dist/css/bootstrap.min.css";
import { RiStarSLine } from "react-icons/ri";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecipeGallery />
    </>
  );
}

export default App;
