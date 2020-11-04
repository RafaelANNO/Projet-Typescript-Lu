System.register("displayJsonToHtml", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function displayJsonToHtml(json) {
        let cols = Object.keys(json[0]);
        let headerRow = cols
            .map(col => `<th id="sort_table_${col}">${col}</th>`)
            .join("");
        let rows = json
            .map((row) => {
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
    exports_1("default", displayJsonToHtml);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("data/users", [], function (exports_2, context_2) {
    "use strict";
    var users;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            users = [
                { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
                { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
                { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
                { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
                { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
                { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
                { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
            ];
            exports_2("default", users);
        }
    };
});
System.register("main", ["data/users", "displayJsonToHtml"], function (exports_3, context_3) {
    "use strict";
    var users_1, displayJsonToHtml_1, appDiv, htmlCode;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (displayJsonToHtml_1_1) {
                displayJsonToHtml_1 = displayJsonToHtml_1_1;
            }
        ],
        execute: function () {
            appDiv = document.getElementById('app');
            htmlCode = `<h1>Exercice TypeScript</h1>`;
            if (appDiv) {
                appDiv.innerHTML += displayJsonToHtml_1.default(users_1.default);
            }
        }
    };
});
