let all_option_left :{
  text: string;
  stock: string;
  price: number;
  tag: string;
  image_src: string;
}[] = [{
  text: "Bambou 1",
  stock: "instock",
  price: 72,
  tag: "Fitness",
  image_src: "./assets/images/product_1.jpg"
},{
  text: "Bambou 2",
  stock: "instock",
  price: 56,
  tag: "Fitness",
  image_src: "./assets/images/product_2.jpg"
},{
  text: "Bambou 3",
  stock: "instock",
  price: 69,
  tag: "Fitness",
  image_src: "./assets/images/product_3.jpg"
}]

let all_option_right :{
  text: string;
  stock: string;
  price: number;
  tag: string;
  image_src: string;
}[] = [];

let before_search_all_option_left :{
  text: string;
  stock: string;
  price: number;
  tag: string;
  image_src: string;
}[] = all_option_left;

let before_search_all_option_right :{
  text: string;
  stock: string;
  price: number;
  tag: string;
  image_src: string;
}[] = all_option_right;


let leftside_table = document.getElementById("leftside_table")
let select_leftside = document.createElement("select");
select_leftside.setAttribute("id", "SelectList");
select_leftside.setAttribute("multiple", "multiple");
select_leftside.setAttribute("style", "width: 400px; height: 250px");
leftside_table?.append(select_leftside);

let rightside_table = document.getElementById("rightside_table")
let select_rightside = document.createElement("select");
select_rightside.setAttribute("id", "PickList");
select_rightside.setAttribute("multiple", "multiple");
select_rightside.setAttribute("style", "width: 400px; height: 250px");
rightside_table?.append(select_rightside);

initiateDisplay();

function initiateDisplay(){
  select_leftside.options.length = 0;
  select_rightside.options.length = 0;

  all_option_left.map(function (option, index) {
    let item = new Option("", index.toString());
    item.setAttribute("class", "the_option_of_each_product");
    item.setAttribute("style", "background-image:url(" + option.image_src +"); background-size: 200px 100px; background-repeat: no-repeat; background-position: top right;")

    
    let image = document.createElement("img");
    image.setAttribute("src", option.image_src);
    
    // Creer la div
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "product_item_div");

    // Creer la span
    let span1 = document.createElement("span");
    span1.setAttribute("class", "text_of_the_product_span");
    span1.innerHTML = "titre : " + option.text + ", tag : " + option.tag + ", status : " + option.stock;


    // Les associations de composant
    divContainer.append(span1);
    divContainer.append(image);
    item.append(divContainer);
    select_leftside.append(item);
  });

  all_option_right.map(function (option, index) {
    let item = new Option("", index.toString());
    item.setAttribute("class", "the_option_of_each_product");
    item.setAttribute("style", "background-image:url(" + option.image_src +"); background-size: 200px 100px; background-repeat: no-repeat; background-position: top right;")


    // Creer la div
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "product_item_div");
    

    // Creer la span
    let span1 = document.createElement("span");
    span1.setAttribute("class", "text_of_the_product_span");
    span1.innerHTML = "titre : " + option.text + ", tag : " + option.tag + ", status : " + option.stock;


    // Les associations de composant
    divContainer.append(span1);
    item.append(divContainer);
    select_rightside.append(item);
  });
}

/**
 * Adds a selected item into the picklist
 */
function addIt() {
  console.log('all_option_left :>> ', select_leftside.selectedIndex);
  all_option_right = before_search_all_option_right;
  all_option_left = before_search_all_option_left;
  if (select_leftside.selectedIndex !== -1 && select_leftside.selectedIndex !== undefined) {
    all_option_right.push(all_option_left[select_leftside.selectedIndex]);
    all_option_left.splice(select_leftside.selectedIndex, 1);
    
    initiateDisplay()
  }
}

/**
 * Delete an item from the picklist
 */
function delIt() {
  all_option_right = before_search_all_option_right;
  all_option_left = before_search_all_option_left;
  if (select_rightside.selectedIndex !== -1 && select_rightside.selectedIndex !== undefined) {
    all_option_left.push(all_option_right[select_rightside.selectedIndex]);
    all_option_right.splice(select_rightside.selectedIndex, 1);
    initiateDisplay()
  }
}


function up_item_select_leftside() {
  console.log('select_leftside.selectedIndex :>> ', select_leftside.selectedIndex);
  if (select_leftside.selectedIndex !== - 1) {
    if (select_leftside.selectedIndex > 0) {
      swap(all_option_left, select_leftside.selectedIndex, select_leftside.selectedIndex - 1);
      initiateDisplay();
    }else{
      alert("Le produit ne peux pas monté plus haut");
    }
  }else{
    alert("Aucun élément choisit");
  }
}

function down_item_select_leftside() {
  console.log('select_leftside.selectedIndex :>> ', select_leftside.selectedIndex);
  console.log('select_leftside.length :>> ', select_leftside.length);
  if (select_leftside.selectedIndex !== - 1) {
    if (select_leftside.length - 1 !== select_leftside.selectedIndex) {
      swap(all_option_left, select_leftside.selectedIndex, select_leftside.selectedIndex + 1);
      initiateDisplay();
    }else{
      alert("Le produit ne peux pas descendre plus bas");
    }
  }else{
    alert("Aucun élément choisit");
  }
}

function up_item_select_rightside() {
  console.log('select_leftside.selectedIndex :>> ', select_leftside.selectedIndex);
  if (select_rightside.selectedIndex !== - 1) {
    if (select_rightside.selectedIndex > 0) {
      swap(all_option_right, select_rightside.selectedIndex, select_rightside.selectedIndex - 1);
      initiateDisplay();
    }else{
      alert("Le produit ne peux pas monté plus haut");
    }
  }else{
    alert("Aucun élément choisit");
  }
}

function down_item_select_rightside() {
  console.log('select_rightside.selectedIndex :>> ', select_rightside.selectedIndex);
  console.log('select_rightside.length :>> ', select_rightside.length);
  if (select_rightside.selectedIndex !== - 1) {
    if (select_rightside.length - 1 !== select_rightside.selectedIndex) {
      swap(all_option_right, select_rightside.selectedIndex, select_rightside.selectedIndex + 1);
      initiateDisplay();
    }else{
      alert("Le produit ne peux pas descendre plus bas");
    }
  }else{
    alert("Aucun élément choisit");
  }
}

function swap(input: { [x: string]: any; }, index_A: number, index_B: number) {
  let temp = input[index_A];
  input[index_A] = input[index_B];
  input[index_B] = temp;
}



function search_leftside() {
  console.log('search_bar.innerHTML :>> ', (<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value);
  if ((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value === "") {
    all_option_left = before_search_all_option_left;
  }else{
    all_option_left = before_search_all_option_left.filter(option => 
      option.text.includes((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value) ||
      option.stock.includes((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value) ||
      option.price.toString().includes((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value) ||
      option.tag.includes((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value)
    );

  }
  initiateDisplay()
}

function search_rightside() {
  console.log('search_bar.innerHTML :>> ', (<HTMLInputElement>document.getElementById("rightside_table_search_bar")).value);
  if ((<HTMLInputElement>document.getElementById("rightside_table_search_bar")).value === "") {
    all_option_right = before_search_all_option_right;
  }else{
    all_option_right = before_search_all_option_right.filter(option => 
      option.text.includes((<HTMLInputElement>document.getElementById("rightside_table_search_bar")).value) ||
      option.stock.includes((<HTMLInputElement>document.getElementById("rightside_table_search_bar")).value) ||
      option.price.toString().includes((<HTMLInputElement>document.getElementById("rightside_table_search_bar")).value) ||
      option.tag.includes((<HTMLInputElement>document.getElementById("rightside_table_search_bar")).value)
    );
  }
  initiateDisplay()
}