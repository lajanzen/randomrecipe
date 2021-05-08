import "./style.css";
import { createElement, removeAllChildren } from "./utils/elements";
import { getRecipes } from "./utils/api";
import { createRecipeElement } from "./components/recipe";

const recipeSection = createElement("section", {
  className: "results",
});

const mainElement = createElement("main", {
  children: [
    createElement("header", {
      className: "hero",
      children: [
        createElement("h1", {
          className: "hero__title",
          innerText: "What the heck will I cook today?!",
        }),
        createElement("button", {
          className: "hero__button",
          innerText: "INSPIRE ME!",
          onclick: () => {
            removeAllChildren(recipeSection); //löscht alle vorherigen Suchergebnisse
            getRecipes("chicken").then((recipes) => {
              // greift auf Recipe API zu

              const shuffledRecipes = recipes
                .sort(() => Math.random() - Math.random()) //mischt die Reihenfolge des Arrays
                .slice(0, 3); // nimmt die ersten 3 Elemente des gemischten Arrays

              const recipeElements = shuffledRecipes.map(createRecipeElement); // Funktion zum Erstellen der Recipe Elemente
              recipeSection.append(...recipeElements); // Hängt die Elemente an die Section an
            });
          },
        }),
      ],
    }),

    createElement("h2", {
      className: "main__h2",
      innerText: "What about...",
    }),

    recipeSection,

    createElement("footer", {
      className: "footer",
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
