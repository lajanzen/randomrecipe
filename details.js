import "./style.css";
import styles from "./details.module.css";
import { createElement } from "./utils/elements";
import { getRecipe } from "./utils/api";
import { createRecipeDetails } from "./components/recipeDetails";

const params = new URLSearchParams(location.search);
const recipeId = params.get("id");

getRecipe(recipeId).then((recipe) => {
  const recipeDetails = recipe.map(createRecipeDetails);
  mainElement.append(...recipeDetails);
});

const mainElement = createElement("main", {
  className: styles.main,
});

document.querySelector("#app").append(mainElement);
