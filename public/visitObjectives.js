var main_table;

function visitObjectives() {
    document.getElementById("content").innerHTML = ""
    console.log("WELCOME TO OBJECTIVES")

    //create element and add it instantly to DOM
    main_table = document.createElement("table"); document.getElementById("content").appendChild(main_table)
    main_table.className = "obj_table";

    th = document.createElement('th');th.innerHTML = "Name";main_table.appendChild(th);
    th = document.createElement('th');th.innerHTML = "Category";main_table.appendChild(th);
    th = document.createElement('th');th.innerHTML = "Priority";main_table.appendChild(th);

    obj_getValues('objectives!A2:E')


}


function obj_getValues(range) {
    try {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
      }).then((response) => {
        console.log(response)
        result = response.result
        const numRows = result.values ? result.values.length : 0;
        console.log(`${numRows} rows retrieved.`);
        obj_printValues(response.result.values)
      });
    } catch (err) {
      console.log(err.message);
      return;
    }
}

function obj_printValues(valuesArray){

  for (let i = 0; i < valuesArray.length; i++){
    if (valuesArray[i][3] == "TRUE"){ // if isActive
      table1 = main_table;
      var row = table1.insertRow()
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      cell0 = "<button>"+i+"</button>"
      cell1.innerHTML = valuesArray[i][0]
      cell2.innerHTML = valuesArray[i][1]
      cell3.innerHTML = valuesArray[i][2]
    }
  }
} 