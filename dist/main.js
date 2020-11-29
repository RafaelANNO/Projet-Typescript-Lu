"use strict";
let users = [
    { id: "27", name: "1", category: "feref", quantity: 5, },
    { id: "1T", name: "aaaaaadd", category: "adadffeazd", quantity: 0 },
    { id: "27", name: "adazgfzd", category: "feref", quantity: 5 },
    { id: "1T", name: "adazdazd", category: "adadffeazd", quantity: 0 },
    { id: "27", name: "adzefzfz", category: "feref", quantity: 5 },
    { id: "1T", name: "ngngnvvv", category: "adadffeazd", quantity: 0 }
];
let userMetaData = [];
function create_the_table_from_json() {
    let col = [];
    for (let i = 0; i < users.length; i++) {
        for (let key in users[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    let table = document.createElement("table");
    let tr = table.insertRow(-1);
    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = col[i];
        userMetaData.push({ sortMode: null });
        th.addEventListener("click", function (e) {
            if (userMetaData[i].sortMode === "DESC" || userMetaData[i].sortMode == null) {
                function SortByID(x, y) {
                    return x[col[i]] - y[col[i]];
                }
                users.sort(SortByID);
                userMetaData[i].sortMode = "ASC";
            }
            else {
                function Inverse_SortByID(x, y) {
                    return y[col[i]] - x[col[i]];
                }
                users.sort(Inverse_SortByID);
                userMetaData[i].sortMode = "DESC";
            }
            create_the_table_from_json();
        });
        tr.appendChild(th);
    }
    for (let i = 0; i < users.length; i++) {
        tr = table.insertRow(-1);
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            if (users[i][col[j]] !== undefined) {
                tabCell.innerHTML = users[i][col[j]];
            }
            else {
                tabCell.innerHTML = "Aucune donnée disponible";
            }
        }
    }
    let divContainer = document.getElementById("showData");
    if (divContainer) {
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
}
