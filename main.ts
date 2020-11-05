// /data :folder
const users = [
  {id : "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5},
  {id : "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5},
  {id : "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5},
  {id : "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5},
  {id : "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5},
  {id : "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5},
  {id : "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5},
];
// ------------------

// /method :folder

/**
 * Affiche un tableau de json en html
 * @param json 
 */
function displayJsonToHtml(json: object[]): string {
  let cols = Object.keys(json[0]);
  let headerRow = cols
    .map(col => `<th id="sort_table_${col}">${col}</th>`)
    .join("");
  let rows = json
    .map((row: { [x: string]: any; }) => {
      let tds = cols
        .map(col => `<td>${row[col]}</td>`)
        .join("");
      return `<tr>${tds}</tr>`;
    })
    .join("");
  const table = `
	<table>
		<thead>
      <tr>
        ${headerRow}
      </tr>
		<thead>
		<tbody>
			${rows || "aucune donnée"}
		<tbody>
  <table>`;
  return table;
}
// ------------------

const appDiv: HTMLElement | null = document.getElementById('app');

if (appDiv) {
  appDiv.innerHTML += "<h1>Exercice TypeScript</h1>";
  appDiv.innerHTML += displayJsonToHtml(users);
}