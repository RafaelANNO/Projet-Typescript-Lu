"use strict";
var users = [
    { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
    { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
    { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
    { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
    { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
    { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
    { id: "fdsfsfds", name: "adazdazd", category: "adadazd", quantity: 5 },
];
function displayJsonToHtml(json) {
    var cols = Object.keys(json[0]);
    var headerRow = cols
        .map(function (col) { return "<th id=\"sort_table_" + col + "\">" + col + "</th>"; })
        .join("");
    var rows = json
        .map(function (row) {
        var tds = cols
            .map(function (col) { return "<td>" + row[col] + "</td>"; })
            .join("");
        return "<tr>" + tds + "</tr>";
    })
        .join("");
    var table = "\n\t<table>\n\t\t<thead>\n      <tr>\n        " + headerRow + "\n      </tr>\n\t\t<thead>\n\t\t<tbody>\n\t\t\t" + (rows || "aucune donnée") + "\n\t\t<tbody>\n  <table>";
    return table;
}
var appDiv = document.getElementById('app');
if (appDiv) {
    appDiv.innerHTML += "<h1>Exercice TypeScript</h1>";
    appDiv.innerHTML += displayJsonToHtml(users);
}
