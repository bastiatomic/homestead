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

    document.getElementById("content").appendChild(document.getElementById("objectives_form"))
    document.getElementById("objectives_form").style.display = "block"

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

function sheetsAPI_appendRow(data, range, responseFunction){
  // data as [[0],[1], [2], [3]]
  //range example: database!A:F;  'A-F' will result in 6 arguments from data
  
  //debug
  console.log("----------")
  console.log("sheetsAPI_appendRow()")
  console.log(data)
  console.log("with range: " + range)
  console.log("----------")

  const body = {
      "values": data,
      "range": range,
      "majorDimension": "COLUMNS"
    };

  try {
      gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: "RAW",
      resource: body,
      }).then((response) => {
          console.log(response.result);
          responseFunction()
      });
  } catch (err) {
      console.log("ERROR " + err.message);
      return;
  }

}

function obj_send(){
  const range = "obj_unsolved!A:C"
  form_name = document.getElementById("obj_name").value
  form_category = document.getElementById("obj_category").value
  form_priority = document.getElementById("obj_priority").value
  data = [[form_name], [form_category], [form_priority]]

  sheetsAPI_appendRow(data, range, obj_reload_table)
}

function obj_reload_table(){
  main_table.innerHTML = ""
  obj_getValues('obj_unsolved!A2:E');
}