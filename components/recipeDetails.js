import styles from "./recipeDetails.module.css";
import { createElement } from "../utils/elements";

export function createRecipeDetails({
  strMealThumb, // image
  strMeal, // name
  strCategory,
  strArea,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
  strMeasure6,
  strMeasure7,
  strMeasure8,
  strMeasure9,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strIngredient9,
  strInstructions,
}) {
  return createElement("section", {
    className: styles.recipe,
    children: [
      createElement("h1", {
        className: styles.recipeName,
        innerText: strMeal,
      }),

      createElement("section", {
        className: styles.recipeInfo,
        children: [
          createElement("p", { innerText: `Category: ${strCategory}` }),
          createElement("p", { innerText: `Origin: ${strArea}` }),
        ],
      }),

      createElement("img", {
        src: strMealThumb,
        className: styles.recipeImage,
      }),

      createElement("ul", {
        className: styles.recipeIngredients,
        children: [
          createElement("li", {
            innerText: `${strMeasure1} ${strIngredient1}`,
          }),
          createElement("li", {
            innerText: `${strMeasure2} ${strIngredient2}`,
          }),
          createElement("li", {
            innerText: `${strMeasure3} ${strIngredient3}`,
          }),
          createElement("li", {
            innerText: `${strMeasure4} ${strIngredient4}`,
          }),
          createElement("li", {
            innerText: `${strMeasure5} ${strIngredient5}`,
          }),
          createElement("li", {
            innerText: `${strMeasure6} ${strIngredient6}`,
          }),
          createElement("li", {
            innerText: `${strMeasure7} ${strIngredient7}`,
          }),
          createElement("li", {
            innerText: `${strMeasure8} ${strIngredient8}`,
          }),
          createElement("li", {
            innerText: `${strMeasure9} ${strIngredient9}`,
          }),
        ],
      }),

      createElement("section", {
        className: styles.recipeInstructions,
        innerText: strInstructions,
      }),
    ],
  });
}
