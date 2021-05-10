export async function getRecipes(name) {
  const promise = fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  const response = await promise;
  // Falls es den Character nicht gibt (Error 404), möchten wir Fehlermeldung verhindern:
  if (response.status === 404) {
    return [];
  }

  const data = await response.json();
  return data.meals;
}

export async function getRecipe(id) {
  const promise = fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const response = await promise;
  // Falls es den Character nicht gibt (Error 404), möchten wir Fehlermeldung verhindern:
  if (response.status === 404) {
    return [];
  }

  const data = await response.json();
  return data.meals;
}
