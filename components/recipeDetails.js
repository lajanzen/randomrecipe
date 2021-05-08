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
  strMeasure10,
  strMeasure11,
  strMeasure12,
  strMeasure13,
  strMeasure14,
  strMeasure15,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strIngredient9,
  strIngredient10,
  strIngredient11,
  strIngredient12,
  strIngredient13,
  strIngredient14,
  strIngredient15,
  strInstructions,
}) {
  return createElement("section", {
    className: styles.recipe,
    children: [
      createElement("h2", {
        innerText: strMeal,
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
        ],
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
          createElement("li", {
            innerText: `${strMeasure10} ${strIngredient10}`,
          }),
          createElement("li", {
            innerText: `${strMeasure11} ${strIngredient11}`,
          }),
          createElement("li", {
            innerText: `${strMeasure12} ${strIngredient12}`,
          }),
          createElement("li", {
            innerText: `${strMeasure13} ${strIngredient13}`,
          }),
          createElement("li", {
            innerText: `${strMeasure14} ${strIngredient14}`,
          }),
          createElement("li", {
            innerText: `${strMeasure15} ${strIngredient15}`,
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
