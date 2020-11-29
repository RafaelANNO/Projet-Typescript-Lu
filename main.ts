// data :folder
let users : any[] = [
  {id : "27", name: "1", category: "feref", quantity: 5,},
  {id : "1T", name: "aaaaaadd", category: "adadffeazd", quantity: 0},
  {id : "27", name: "adazgfzd", category: "feref",      quantity: 5},
  {id : "1T", name: "adazdazd", category: "adadffeazd", quantity: 0},
  {id : "27", name: "adzefzfz", category: "feref",      quantity: 5},
  {id : "1T", name: "ngngnvvv", category: "adadffeazd", quantity: 0}
];

let userMetaData : any[] = [];
let col2 : string[] = [];
for (let i = 0; i < users.length; i++) {
    for (let key in users[i]) {
        if (col2.indexOf(key) === -1) {
          col2.push(key);
        }
    }
}
col2.map(function (item:any) {
  userMetaData.push({sortMode: null})
})

function create_the_table_from_json() {

  // EXTRACT VALUE FOR HTML HEADER. 
  // ('Book ID', 'Book Name', 'Category' and 'Price')
  let col : string[] = [];
  for (let i = 0; i < users.length; i++) {
      for (let key in users[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
      }
  }

  // CREATE DYNAMIC TABLE.
  let table = document.createElement("table");
  table.setAttribute("class", "main_table")

  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  let tr = table.insertRow(-1);                   // TABLE ROW.

  for (let i = 0; i < col.length; i++) {
      let th = document.createElement("th");      // TABLE HEADER.
      th.setAttribute("id", col[i]);
      th.setAttribute("class","clickable")
      th.innerHTML = col[i];
      th.addEventListener("click", function (e) {
        
        // trier
        if (userMetaData[i].sortMode === "DESC" || userMetaData[i].sortMode == null) {
          users.sort((x: any, y:any) => {
            console.log(x[col[i]], y[col[i]], x[col[i]] - y[col[i]]);
            if (x[col[i]] > y[col[i]]){
              return 1;
            } else if(x[col[i]] < y[col[i]]){
              return -1;
            }
            return 0;
          });
          userMetaData[i].sortMode = "ASC";
        }else{
          
          users.sort((x: any, y:any) => {
            console.log(x[col[i]], y[col[i]], x[col[i]] - y[col[i]]);
            if (x[col[i]] > y[col[i]]){
              return -1;
            } else if(x[col[i]] < y[col[i]]){
              return 1;
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

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (let i = 0; i < users.length; i++) {

      tr = table.insertRow(-1);

      for (let j = 0; j < col.length; j++) {
          let tabCell = tr.insertCell(-1);
          if (users[i][col[j]] !== undefined) {
            tabCell.innerHTML = users[i][col[j]];
          }else{
            tabCell.innerHTML = "Aucune donnée disponible"
          }
          
      }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  let divContainer = document.getElementById("showData");
  if (divContainer) {
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }
}