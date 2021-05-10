import "./style.css";
import { createElement, removeAllChildren } from "./utils/elements";
import { getRecipes } from "./utils/api";
import { createRecipeElement } from "./components/recipe";

const recipeSection = createElement("section", {
  className: "results",
});

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("header", {
      className: "hero",
      children: [
        createElement("h1", {
          className: "hero__title",
          innerText: "What the heck will I cook today?!",
        }),
        createElement("select", {
          className: "hero__dropdown",
          id: "hero__dropdown",
          children: [
            createElement("option", {
              innerText: "Any preference?",
              value: "",
            }),
            createElement("option", {
              innerText: "Vegan",
              value: "Vegan",
            }),
            createElement("option", {
              innerText: "Vegetarian",
              value: "Vegetarian",
            }),
            createElement("option", {
              innerText: "Chicken",
              value: "Chicken",
            }),
            createElement("option", {
              innerText: "Beef",
              value: "Beef",
            }),
            createElement("option", {
              innerText: "Breakfast",
              value: "Breakfast",
            }),
            createElement("option", {
              innerText: "Pasta",
              value: "Pasta",
            }),
          ],
        }),

        createElement("button", {
          className: "hero__button",
          innerText: "INSPIRE ME!",
          onclick: () => {
            removeAllChildren(recipeSection); //löscht alle vorherigen Suchergebnisse
            getRecipes("chicken").then((recipes) => {
              // greift auf Recipe API zu

              // folgender Filter funktioniert nicht gut, weil ich immer nur max 25 Rezepte bekomme
              // console.log(recipes);
              // const dropdownValue = document.querySelector("#hero__dropdown")
              //   .value;

              // const filteredRecipes = recipes.filter(
              //   (category) => category.strCategory == dropdownValue
              // );

              // console.log(filteredRecipes);

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
