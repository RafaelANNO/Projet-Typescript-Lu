// cette variable est laissé en tableau de type any pour pouvoir etre modifié n'importe comment
let users : any[] = [
  {id : "27", name: "1", category: "feref", quantity: 5},
  {id : "1T",  category: "adadffeazd", quantity: 0},
  {id : "27", name: "adazgfzd", category: "feref",      quantity: 5},
  {id : "1T", name: "adazdazd", category: "adadffeazd", quantity: 2},
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
col2.map(function () {
  userMetaData.push({sortMode: "ASC"});
});

function create_the_table_from_json():Promise<Function> {
  return new Promise(function () {
    let col : string[] = [];
    for (let i = 0; i < users.length; i++) {
        for (let key in users[i]) {
            if (col.indexOf(key) === -1) {
              col.push(key);
            }
        }
    }

    let table = document.createElement("table");
    table.setAttribute("class", "main_table")
    table.setAttribute("id", "customers")
    let tr = table.insertRow(-1);

    for (let i = 0; i < col.length; i++) {
      let th = document.createElement("th");
      th.setAttribute("id", col[i]);
      th.setAttribute("class","clickable")
      th.innerHTML = col[i];
      th.addEventListener("click", function (): Promise<Function> {
        return new Promise(function (): void {
          if (userMetaData[i].sortMode === "DESC" || userMetaData[i].sortMode == null) {
            users.sort((x: any, y:any) => {
              console.log(x[col[i]], y[col[i]], x[col[i]] - y[col[i]]);
              if (x[col[i]] > y[col[i]]){
                return 1;
              } else if(x[col[i]] < y[col[i]]){
                return -1;
              }else if (x[col[i]] == undefined && y[col[i]] != undefined) {
                return 1;
              }else if (x[col[i]] != undefined && y[col[i]] == undefined) {
                return -1
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
              }else if (y[col[i]] == undefined) {
                return -1;
              }else if (x[col[i]] == undefined && y[col[i]] != undefined) {
                return 1;
              }else if (x[col[i]] != undefined && y[col[i]] == undefined) {
                return -1
              }
              return 0;
            });
            userMetaData[i].sortMode = "DESC";
          };
          create_the_table_from_json();
        });
      });
      tr.appendChild(th);
    };
    
    for (let i = 0; i < users.length; i++) {
      tr = table.insertRow(-1);
      for (let j = 0; j < col.length; j++) {
        let tabCell = tr.insertCell(-1);
        if (users[i][col[j]] !== undefined) {
          tabCell.innerHTML = users[i][col[j]];
        }else{
          tabCell.innerHTML = "Aucune donnée disponible"
        };
      };
    };

    let divContainer = document.getElementById("showData");
    if (divContainer) {
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
    };
  });
}

create_the_table_from_json()