import styles from "./recipe.module.css";
import { createElement } from "../utils/elements";

export function createRecipeElement({
  strMealThumb, // image
  strMeal, // name
  idMeal,
  strCategory,
  strArea,
  strIngredient1,
  strIngredient2,
  strIngredient3,
}) {
  return createElement("section", {
    className: styles.recipe,
    children: [
      createElement("a", {
        href: `/details.html?id=${idMeal}`,
        children: [
          createElement("h2", {
            innerText: strMeal,
          }),
        ],
      }),
      createElement("img", {
        src: strMealThumb,
        className: styles.recipeImage,
      }),

      createElement("section", {
        className: styles.recipeInfo,
        children: [
          createElement("p", { innerText: `Category: ${strCategory}` }),
          createElement("p", { innerText: `Origin: ${strArea}` }),
          createElement("p", {
            innerText: `with ${strIngredient1}, ${strIngredient2} and ${strIngredient3}`,
          }),
        ],
      }),
    ],
  });
}
