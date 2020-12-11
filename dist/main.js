"use strict";
let users = [
    { id: "27", name: "1", category: "feref", quantity: 5, },
    { id: "1T", category: "adadffeazd", quantity: 0 },
    { id: "27", name: "adazgfzd", category: "feref", quantity: 5 },
    { id: "1T", name: "adazdazd", category: "adadffeazd", quantity: 0 },
    { id: "27", name: "adzefzfz", category: "feref", quantity: 5 },
    { id: "1T", name: "ngngnvvv", category: "adadffeazd", quantity: 0 }
];
let userMetaData = [];
let col2 = [];
for (let i = 0; i < users.length; i++) {
    for (let key in users[i]) {
        if (col2.indexOf(key) === -1) {
            col2.push(key);
        }
    }
}
col2.map(function () {
    userMetaData.push({ sortMode: null });
});
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
    table.setAttribute("class", "main_table");
    table.setAttribute("id", "customers");
    let tr = table.insertRow(-1);
    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");
        th.setAttribute("id", col[i]);
        th.setAttribute("class", "clickable");
        th.innerHTML = col[i];
        th.addEventListener("click", function () {
            if (userMetaData[i].sortMode === "DESC" || userMetaData[i].sortMode == null) {
                users.sort((x, y) => {
                    console.log(x[col[i]], y[col[i]], x[col[i]] - y[col[i]]);
                    if (x[col[i]] > y[col[i]]) {
                        return 1;
                    }
                    else if (x[col[i]] < y[col[i]]) {
                        return -1;
                    }
                    else if (x[col[i]] == undefined && y[col[i]] != undefined) {
                        return 1;
                    }
                    else if (x[col[i]] != undefined && y[col[i]] == undefined) {
                        return -1;
                    }
                    return 0;
                });
                userMetaData[i].sortMode = "ASC";
            }
            else {
                users.sort((x, y) => {
                    console.log(x[col[i]], y[col[i]], x[col[i]] - y[col[i]]);
                    if (x[col[i]] > y[col[i]]) {
                        return -1;
                    }
                    else if (x[col[i]] < y[col[i]]) {
                        return 1;
                    }
                    else if (y[col[i]] == undefined) {
                        return -1;
                    }
                    else if (x[col[i]] == undefined && y[col[i]] != undefined) {
                        return 1;
                    }
                    else if (x[col[i]] != undefined && y[col[i]] == undefined) {
                        return -1;
                    }
                    return 0;
                });
                userMetaData[i].sortMode = "DESC";
            }
            create_the_table_from_json();
            console.log(userMetaData);
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
create_the_table_from_json();
let all_option_left = [{
        text: "Bambou 1",
        stock: "instock",
        price: 72,
        tag: "Fitness",
        image_src: "./assets/images/product_1.jpg"
    }, {
        text: "Bambou 2",
        stock: "instock",
        price: 56,
        tag: "Fitness",
        image_src: "./assets/images/product_2.jpg"
    }, {
        text: "Bambou 3",
        stock: "instock",
        price: 69,
        tag: "Fitness",
        image_src: "./assets/images/product_3.jpg"
    }];
let all_option_right = [];
let before_search_all_option_left = all_option_left;
let before_search_all_option_right = all_option_right;
let leftside_table = document.getElementById("leftside_table");
let select_leftside = document.createElement("select");
select_leftside.setAttribute("id", "SelectList");
select_leftside.setAttribute("multiple", "multiple");
select_leftside.setAttribute("style", "width: 400px; height: 250px");
leftside_table === null || leftside_table === void 0 ? void 0 : leftside_table.append(select_leftside);
let rightside_table = document.getElementById("rightside_table");
let select_rightside = document.createElement("select");
select_rightside.setAttribute("id", "PickList");
select_rightside.setAttribute("multiple", "multiple");
select_rightside.setAttribute("style", "width: 400px; height: 250px");
rightside_table === null || rightside_table === void 0 ? void 0 : rightside_table.append(select_rightside);
initiateDisplay();
function initiateDisplay() {
    select_leftside.options.length = 0;
    select_rightside.options.length = 0;
    all_option_left.map(function (option, index) {
        let item = new Option("", index.toString());
        item.setAttribute("class", "the_option_of_each_product");
        item.setAttribute("style", "background-image:url(" + option.image_src + "); background-size: 200px 100px; background-repeat: no-repeat; background-position: top right;");
        let image = document.createElement("img");
        image.setAttribute("src", option.image_src);
        let divContainer = document.createElement("div");
        divContainer.setAttribute("class", "product_item_div");
        let span1 = document.createElement("span");
        span1.setAttribute("class", "text_of_the_product_span");
        span1.innerHTML = "titre : " + option.text + ", tag : " + option.tag + ", status : " + option.stock;
        divContainer.append(span1);
        divContainer.append(image);
        item.append(divContainer);
        item.addEventListener('dblclick', function (e) {
            console.log('e :>> ', e);
            addIt();
        });
        select_leftside.append(item);
    });
    all_option_right.map(function (option, index) {
        let item = new Option("", index.toString());
        item.setAttribute("class", "the_option_of_each_product");
        item.setAttribute("style", "background-image:url(" + option.image_src + "); background-size: 200px 100px; background-repeat: no-repeat; background-position: top right;");
        let divContainer = document.createElement("div");
        divContainer.setAttribute("class", "product_item_div");
        let span1 = document.createElement("span");
        span1.setAttribute("class", "text_of_the_product_span");
        span1.innerHTML = "titre : " + option.text + ", tag : " + option.tag + ", status : " + option.stock;
        divContainer.append(span1);
        item.addEventListener('dblclick', function (e) {
            console.log('e :>> ', e);
            delIt();
        });
        item.append(divContainer);
        select_rightside.append(item);
    });
}
function addIt() {
    console.log('all_option_left :>> ', select_leftside);
    all_option_right = before_search_all_option_right;
    all_option_left = before_search_all_option_left;
    if (select_leftside.selectedIndex !== -1 && select_leftside.selectedIndex !== undefined) {
        all_option_right.push(all_option_left[select_leftside.selectedIndex]);
        all_option_left.splice(select_leftside.selectedIndex, 1);
        initiateDisplay();
    }
}
function delIt() {
    all_option_right = before_search_all_option_right;
    all_option_left = before_search_all_option_left;
    if (select_rightside.selectedIndex !== -1 && select_rightside.selectedIndex !== undefined) {
        all_option_left.push(all_option_right[select_rightside.selectedIndex]);
        all_option_right.splice(select_rightside.selectedIndex, 1);
        initiateDisplay();
    }
}
function up_item_select_leftside() {
    console.log('select_leftside.selectedIndex :>> ', select_leftside.selectedIndex);
    if (select_leftside.selectedIndex !== -1) {
        if (select_leftside.selectedIndex > 0) {
            swap(all_option_left, select_leftside.selectedIndex, select_leftside.selectedIndex - 1);
            initiateDisplay();
        }
        else {
            alert("Le produit ne peux pas monté plus haut");
        }
    }
    else {
        alert("Aucun élément choisit");
    }
}
function down_item_select_leftside() {
    console.log('select_leftside.selectedIndex :>> ', select_leftside.selectedIndex);
    console.log('select_leftside.length :>> ', select_leftside.length);
    if (select_leftside.selectedIndex !== -1) {
        if (select_leftside.length - 1 !== select_leftside.selectedIndex) {
            swap(all_option_left, select_leftside.selectedIndex, select_leftside.selectedIndex + 1);
            initiateDisplay();
        }
        else {
            alert("Le produit ne peux pas descendre plus bas");
        }
    }
    else {
        alert("Aucun élément choisit");
    }
}
function up_item_select_rightside() {
    console.log('select_leftside.selectedIndex :>> ', select_leftside.selectedIndex);
    if (select_rightside.selectedIndex !== -1) {
        if (select_rightside.selectedIndex > 0) {
            swap(all_option_right, select_rightside.selectedIndex, select_rightside.selectedIndex - 1);
            initiateDisplay();
        }
        else {
            alert("Le produit ne peux pas monté plus haut");
        }
    }
    else {
        alert("Aucun élément choisit");
    }
}
function down_item_select_rightside() {
    console.log('select_rightside.selectedIndex :>> ', select_rightside.selectedIndex);
    console.log('select_rightside.length :>> ', select_rightside.length);
    if (select_rightside.selectedIndex !== -1) {
        if (select_rightside.length - 1 !== select_rightside.selectedIndex) {
            swap(all_option_right, select_rightside.selectedIndex, select_rightside.selectedIndex + 1);
            initiateDisplay();
        }
        else {
            alert("Le produit ne peux pas descendre plus bas");
        }
    }
    else {
        alert("Aucun élément choisit");
    }
}
function swap(input, index_A, index_B) {
    let temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
}
function search_leftside() {
    console.log('search_bar.innerHTML :>> ', document.getElementById("leftside_table_search_bar").value);
    if (document.getElementById("leftside_table_search_bar").value === "") {
        all_option_left = before_search_all_option_left;
    }
    else {
        all_option_left = before_search_all_option_left.filter(option => option.text.includes(document.getElementById("leftside_table_search_bar").value) ||
            option.stock.includes(document.getElementById("leftside_table_search_bar").value) ||
            option.price.toString().includes(document.getElementById("leftside_table_search_bar").value) ||
            option.tag.includes(document.getElementById("leftside_table_search_bar").value));
    }
    initiateDisplay();
}
function search_rightside() {
    console.log('search_bar.innerHTML :>> ', document.getElementById("rightside_table_search_bar").value);
    if (document.getElementById("rightside_table_search_bar").value === "") {
        all_option_right = before_search_all_option_right;
    }
    else {
        all_option_right = before_search_all_option_right.filter(option => option.text.includes(document.getElementById("rightside_table_search_bar").value) ||
            option.stock.includes(document.getElementById("rightside_table_search_bar").value) ||
            option.price.toString().includes(document.getElementById("rightside_table_search_bar").value) ||
            option.tag.includes(document.getElementById("rightside_table_search_bar").value));
    }
    initiateDisplay();
}
const add = (a, b) => a + b;
QUnit.module('add', function () {
    QUnit.test('test de la fonction swap', function (assert) {
        swap(all_option_left, 1, 2);
        let index_a = all_option_left[1];
        let index_b = all_option_left[2];
        assert.equal(all_option_left[1], index_b, "la place s'échange bien ");
        assert.equal(all_option_left[2], index_a, "la place s'échange bien ");
    });
});
