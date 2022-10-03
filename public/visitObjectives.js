var main_table;

function visitObjectives() {
    document.getElementById("content").innerHTML = ""
    console.log("WELCOME TO OBJECTIVES")

    //create element and add it instantly to DOM
    div_wrapper = document.createElement("div");document.getElementById("content").appendChild(div_wrapper)
    div_wrapper.className = "table-scroll"
    main_table = document.createElement("table"); div_wrapper.appendChild(main_table)
    main_table.className = "obj_table";
    main_table.style.overflow="auto"

    th = document.createElement('th');th.innerHTML = "     ";main_table.appendChild(th);
    th = document.createElement('th');th.innerHTML = "Name";main_table.appendChild(th);
    th = document.createElement('th');th.innerHTML = "Category";main_table.appendChild(th);
    th = document.createElement('th');th.innerHTML = "Priority";main_table.appendChild(th);

    obj_getValues('obj_unsolved!A2:E')


}


function obj_getValues(range) {
    try {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
      }).then((response) => {
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
    table1 = main_table;
    var row = table1.insertRow()
    row.id = "tableRow"+i;
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML = "<img src='graphics/edit_alt.png' onclick='sheetsAPI_deleteRow("+1645068860+", "+(i+1)+")'>"
    cell1.innerHTML = valuesArray[i][0]
    cell2.innerHTML = valuesArray[i][1]
    cell3.innerHTML = valuesArray[i][2]
  }
} 

function sheetsAPI_deleteRow(sheetId, rowId) {
  console.log("REMOVING FROM "+sheetId+": "+ (rowId))

    gapi.client.sheets.spreadsheets.batchUpdate({
      "spreadsheetId": spreadsheetId,
      "resource": {
        "requests": [
          {
            "deleteDimension": {
              "range": {
                "sheetId": sheetId,
                "dimension": "ROWS",
                "startIndex": rowId,
                "endIndex": rowId+1
              }
            }
          }
        ]
      }
    }).then(function(response) { main_table.innerHTML ="";   obj_getValues('obj_unsolved!A2:E'); console.log("Response", response);})

}