import "./style.css";
import { createElement, removeAllChildren } from "./utils/elements";
import { getRecipes } from "./utils/api";
import { createRecipeElement } from "./components/recipe";

const recipeSection = createElement("section", {
  className: "results",
});

const mainElement = createElement("main", {
  innerText: "blabla",
  children: [
    createElement("header", {
      className: "hero",
      children: [
        createElement("h1", {
          className: "hero__title",
          innerText: "What the heck will I cook today",
        }),
        createElement("input", {
          className: "input",
          placeholder: "Search recipe",
          autofocus: true,
          // Hier holen wir uns die API gefiltert nach dem Input-Wert:
          oninput: (event) => {
            // event ist das "Eintippen" im Input-Feld
            removeAllChildren(recipeSection); //löscht alle vorherigen Suchergebnisse

            const search = event.target.value; // greift auf das entsprechende Input-Element zu (was man eingibt)
            getRecipes(search).then((recipes) => {
              //Fetch Funkion greift auf API zu
              const recipeElements = recipes.map(createRecipeElement); // Erstelle neue array mit Character-Elementen
              recipeSection.append(...recipeElements); // Fügt es der Character-Section hinzu
            });
          },
        }),
      ],
    }),

    recipeSection,

    createElement("footer", {
      className: "footer",
      children: [
        createElement("small", {
          className: "footer__trademark",
          children: [createElement("span", { innerText: "Have fun cooking" })],
        }),
      ],
    }),
  ],
});

document.querySelector("#app").append(mainElement);
