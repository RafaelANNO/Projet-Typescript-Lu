// /data :folder
let users = [
  {id : "3F", name: "adazdazd", category: "feref"},
  {id : "1T", name: "adazdazd", category: "adadffeazd", quantity: 0},
  {id : "27", name: "adazdazd", category: "feref", quantity: 5}
];
// ------------------

// method :folder

/**
 * Afficher un tableau d'objet en html
 * @param json 
 */
function displayArrayJSONToHtml(json: object[]): string {
  let cols : string[] = [];
  json.map(function (_item, index):void {
    cols = [...cols, ...Object.keys(json[index])]
  });
  cols = getUnique(cols);
  let headerRow = cols
    .map(col => `<th id="sort_table_${col}">${col}</th>`)
    .join("");
  let rows = json
    .map((row: { [x: string]: any; }) => {
      let tds = cols
        .map(col => `<td>${row[col] === undefined ? "aucune donnée": row[col]}</td>`)
        .join("");
      return `<tr>${tds}</tr>`;
    })
    .join("");
  const table = `
	<table id="tableau_exercice_1">
		<thead>
      <tr>
        ${headerRow}
      </tr>
		<thead>
		<tbody>
			${rows}
		<tbody>
  <table>`;
  return table;
}

function getUnique(array: string[]){
  var uniqueArray = [];
  for(let value of array){
    if(uniqueArray.indexOf(value) === -1){
      uniqueArray.push(value);
    }
  }
  return uniqueArray;
}

// ------------------

//main.ts
const appDiv: HTMLElement | null = document.getElementById('app');

if (appDiv) {
  appDiv.innerHTML += "<h1>Exercice TypeScript</h1>";
  appDiv.innerHTML += displayArrayJSONToHtml(users);
  let div = document.createElement("div")?.setAttribute("id", "div_tableau_2");
  let tableau = document.createElement("table");
  document.body.appendChild(tableau);
}
//-----------------