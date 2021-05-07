export async function getRecipes() {
  const promise = fetch(`www.themealdb.com/api/json/v1/1/random.php`);
  const response = await promise;
  // Falls es den Character nicht gibt (Error 404), möchten wir Fehlermeldung verhindern:
  if (response.status === 404) {
    return [];
  }

  const data = await response.json();
  return data.results;
}
