var main_table;
var valuesArray = [];

function visitObjectives() {
  visitHome()
    console.log("WELCOME TO OBJECTIVES")

    //create element and add it instantly to DOM
    div_wrapper = document.createElement("div")
    div_wrapper.className = "table-scroll"
    main_table = document.createElement("table"); div_wrapper.appendChild(main_table)
    main_table.className = "obj_table";
    main_table.style.overflow="auto"

    th = document.createElement('th');th.innerHTML = "     ";main_table.appendChild(th);
    th = document.createElement('th');th.innerHTML = "Name";main_table.appendChild(th);
    th = document.createElement('th');th.innerHTML = "Category";main_table.appendChild(th);
    th = document.createElement('th');th.innerHTML = "Priority";main_table.appendChild(th);

    document.getElementById("objectives_form").appendChild(div_wrapper)
    obj_getValues('obj_unsolved!A2:E')

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
        valuesArray = response.result.values
        obj_printValues(response.result.values)
      });
    } catch (err) {
      console.log(err.message);
      return;
    }
}

function obj_printValues(valuesArray1){

  for (let i = 0; i < valuesArray1.length; i++){
    table1 = main_table;
    var row = table1.insertRow()
    row.id = "tableRow"+i;
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML = "<img class='obj_remove_button' src='graphics/edit_alt.png' onclick='objectiveSolved("+1645068860+", "+(i+1)+")'>"
    cell1.innerHTML = valuesArray1[i][0]
    cell2.innerHTML = valuesArray1[i][1]
    cell3.innerHTML = valuesArray1[i][2]
  }
} 

function sheetsAPI_deleteRow(sheetId, rowId) {

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
    }).then(function(response) { main_table.innerHTML ="";   obj_getValues('obj_unsolved!A2:E');})

}

function objectiveSolved(sheetId, rowId){

  splitter = valuesArray[rowId-1][3].split(".")
  newDate = new Date(splitter[2],splitter[1]-1,splitter[0])
  sheetsAPI_appendRow([[valuesArray[rowId-1][0]],[valuesArray[rowId-1][1]],[valuesArray[rowId-1][2]], [newGoogleDate(newDate)]], "obj_solved!A:C", null)

  sheetsAPI_deleteRow(sheetId, rowId)

}

function sheetsAPI_appendRow(data, range, responseFunction){
  // data as [[0],[1], [2], [3]]
  //range example: database!A:F;  'A-F' will result in 6 arguments from data

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
  form_createdAt = newGoogleDate("")
  data = [[form_name], [form_category], [form_priority], [form_createdAt]]

  sheetsAPI_appendRow(data, range, obj_reload_table)
}

function obj_reload_table(){
  main_table.innerHTML = ""
  obj_getValues('obj_unsolved!A2:E');
}

function newGoogleDate(value){
  var D;
  if (!value){
    D = new Date() ;
  } else {
    D = new Date(value) ;
  }
  var Null = new Date(Date.UTC(1899,11,30,0,0,0,0)) ; // the starting value for Google
  return ((D.getTime()  - Null.getTime())/60000 - D.getTimezoneOffset()) / 1440 ;
}