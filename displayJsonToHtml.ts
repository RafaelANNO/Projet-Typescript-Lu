export default function displayJsonToHtml(json: object[]): string {
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
