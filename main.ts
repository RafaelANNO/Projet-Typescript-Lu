// /data :folder
const users = [
  {id : "fdsfsfds", name: "adazdazd", category: "adadffeazd", quantity: 0},
  {id : "fdsfsfds", name: "adazdazd", category: "feref", quantity: 5},
  {id : "fdsfsfds", name: "adazdazd", category: "feref", quantity: 5}
];
// ------------------

// method :folder

/**
 * 
 * Affiche un tableau de category: "feref",json en html
 * @param json 
 */
function displayJsonToHtml(json: object[]): string {
  let cols : string[] = [];
  json.map(function (_item, index):void {
    cols = [...cols, ...Object.keys(json[index])]
  })
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
	<table>
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

function getUnique(array: any){
  var uniqueArray = [];
  
  // Loop through array values
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
  appDiv.innerHTML += displayJsonToHtml(users);
}
//-----------------