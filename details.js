import "./style.css";
import styles from "./details.module.css";
import { createElement } from "./utils/elements";
import { getRecipe } from "./utils/api";
import { createRecipeDetails } from "./components/recipeDetails";

const params = new URLSearchParams(location.search);
const recipeId = params.get("id");

getRecipe(recipeId).then((recipe) => {
  const recipeDetails = recipe.map(createRecipeDetails);
  recipeSection.append(...recipeDetails);
});

const recipeSection = createElement("recipeSection", {
  className: styles.recipeSection,
});

const mainElement = createElement("main", {
  className: styles.main,
  children: [
    recipeSection,

    createElement("footer", {
      className: styles.footer,
      children: [
        createElement("small", {
          className: "footer__trademark",
          children: [
            createElement("span", { innerText: "Have fun cooking ♥" }),
          ],
        }),
      ],
    }),
  ],
});

document.querySelector("#app").append(mainElement);
