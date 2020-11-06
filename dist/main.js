"use strict";
var _a;
let users = [
    { id: "3F", name: "adazdazd", category: "feref" },
    { id: "1T", name: "adazdazd", category: "adadffeazd", quantity: 0 },
    { id: "27", name: "adazdazd", category: "feref", quantity: 5 }
];
function displayArrayJSONToHtml(json) {
    let cols = [];
    json.map(function (_item, index) {
        cols = [...cols, ...Object.keys(json[index])];
    });
    cols = getUnique(cols);
    let headerRow = cols
        .map(col => `<th id="sort_table_${col}">${col}</th>`)
        .join("");
    let rows = json
        .map((row) => {
        let tds = cols
            .map(col => `<td>${row[col] === undefined ? "aucune donnée" : row[col]}</td>`)
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
function getUnique(array) {
    var uniqueArray = [];
    for (let value of array) {
        if (uniqueArray.indexOf(value) === -1) {
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}
const appDiv = document.getElementById('app');
if (appDiv) {
    appDiv.innerHTML += "<h1>Exercice TypeScript</h1>";
    appDiv.innerHTML += displayArrayJSONToHtml(users);
    let div = (_a = document.createElement("div")) === null || _a === void 0 ? void 0 : _a.setAttribute("id", "div_tableau_2");
    let tableau = document.createElement("table");
    document.body.appendChild(tableau);
}
