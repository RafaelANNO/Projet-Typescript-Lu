let all_option_left :any[] = [{
  text: "Bambou 1",
  stock: "instock",
  price: 72,
  test_genericité: "testgenericité !!!",
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

let all_option_right :any[] = [];

let before_search_all_option_left :any[] = all_option_left;

let before_search_all_option_right :any[] = all_option_right;

let cols_attributes : string[] = [];
for (let i = 0; i < all_option_left.length; i++) {
  for (let key in all_option_left[i]) {
      if (cols_attributes.indexOf(key) === -1) {
        cols_attributes.push(key);
      }
  }
}

// J'ai tenter de faire des import pour du code propre mais je n'y arrive pas
let leftside_table = document.getElementById("leftside_table")
let select_leftside = document.createElement("select");
select_leftside.setAttribute("id", "SelectList");
select_leftside.setAttribute("multiple", "multiple");
select_leftside.setAttribute("style", "width: 600px; height: 250px; overflow: scroll;");
leftside_table?.append(select_leftside);

let rightside_table = document.getElementById("rightside_table")
let select_rightside = document.createElement("select");
select_rightside.setAttribute("id", "PickList");
select_rightside.setAttribute("multiple", "multiple");
select_rightside.setAttribute("style", "width: 600px; height: 250px; overflow: scroll;");
rightside_table?.append(select_rightside);

initiateDisplay();

function initiateDisplay():Promise<Function>{
  return new Promise(function ():void {
    select_leftside.options.length = 0;
  select_rightside.options.length = 0;
  all_option_left.map(function (option, index) {
    
    let item = new Option("", index.toString());
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "product_item_div");

    let unordered_list = document.createElement("ul");
    cols_attributes.map(function (col_attribute:String) {
      let span1 = document.createElement("li");
      span1.setAttribute("class", "text_of_the_product_span");
      if (typeof(option[col_attribute.toString()]) === "undefined") {
        span1.innerHTML = col_attribute.toString() + " : " + "non renseigné   |   " 
      }else{
        // si ca commen
        span1.innerHTML = col_attribute.toString() + " : " + option[col_attribute.toString()] + "   |   "
      }
      unordered_list.append(span1);
    });
    divContainer.append(unordered_list)
    // Les associations de composant
    item.append(divContainer);
    item.addEventListener('dblclick', function ():void {
      addIt();
    });
    select_leftside.append(item);
  });

  all_option_right.map(function (option, index) {
    let item = new Option("", index.toString());
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "product_item_div");

    let unordered_list = document.createElement("ul");
    cols_attributes.map(function (col_attribute:String) {
      let span1 = document.createElement("li");
      span1.setAttribute("class", "text_of_the_product_span");
      if (typeof(option[col_attribute.toString()]) === "undefined") {
        span1.innerHTML = col_attribute.toString() + " : " + "non renseigné"
      }else{
        span1.innerHTML = col_attribute.toString() + " : " + option[col_attribute.toString()]
      }
      unordered_list.append(span1);
    });
    divContainer.append(unordered_list)
    item.addEventListener('dblclick', function (e) {
      console.log('e :>> ', e);
      delIt();
    });
    item.append(divContainer);
    select_rightside.append(item);
  });
  });
  
}

/**
 * Adds a selected item into the picklist
 */
function addIt(): Promise<Function> {
  return new Promise(function ():void {
    console.log('all_option_left :>> ', select_leftside);
    all_option_right = before_search_all_option_right;
    all_option_left = before_search_all_option_left;
    console.log(all_option_left[select_leftside.selectedIndex])
    if (select_leftside.selectedIndex !== -1 && select_leftside.selectedIndex !== undefined) {
      all_option_right.push(all_option_left[select_leftside.selectedIndex]);
      all_option_left.splice(select_leftside.selectedIndex, 1);
      initiateDisplay()
    }
  })
}

/**
 * Delete an item from the picklist
 */
function delIt(): Promise<Function> {
  return new Promise(function (): void {
    all_option_right = before_search_all_option_right;
    all_option_left = before_search_all_option_left;
    if (select_rightside.selectedIndex !== -1 && select_rightside.selectedIndex !== undefined) {
      all_option_left.push(all_option_right[select_rightside.selectedIndex]);
      all_option_right.splice(select_rightside.selectedIndex, 1);
      initiateDisplay()
    }
  });
}

function up_item_select_leftside():Promise<Function> {
  return new Promise(function ():void {
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
  });
}

function down_item_select_leftside(): Promise<Function> {
  return new Promise(function ():void {
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
  })
}

function up_item_select_rightside(): Promise<Function> {
  return new Promise(function ():void {
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
  })
}

function down_item_select_rightside(): Promise<Function> {
  return new Promise(function ():void {
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
  });
}

function swap(input: { [x: string]: any; }, index_A: number, index_B: number): Promise<Function> {
  return new Promise(function ():void {
    let temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
  })
};

function search_leftside(): Promise<Function> {
  return new Promise(function ():void {
    console.log('search_bar.innerHTML :>> ', (<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value);
    if ((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value === "") {
      all_option_left = before_search_all_option_left;
    }else{
      cols_attributes.map(function (col_attribute) {
        all_option_left = before_search_all_option_left.filter(option => {
          console.log(option[col_attribute.toString()]);
          if (typeof(option[col_attribute.toString()]) !== "undefined") {
            return option[col_attribute.toString()].toString().includes((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value)
          }
        }
          /* option.text.includes((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value) ||
          option.stock.includes((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value) ||
          option.price.toString().includes((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value) ||
          option.tag.includes((<HTMLInputElement>document.getElementById("leftside_table_search_bar")).value) */
          
        );
      });
      
      console.table(all_option_left);
    }
    initiateDisplay()
  });
}

function search_rightside():Promise<Function> {
  return new Promise(function ():void {
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
    };
    initiateDisplay();
  });
}