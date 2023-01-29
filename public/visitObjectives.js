var main_table;
var valuesArray = [];

function visitObjectives() {
  visitHome()
  console.log("WELCOME TO OBJECTIVES")

  /*create element and add it instantly to DOM
  div_wrapper = document.getElementById("div")
  main_table = document.getElementById("table");
  div_wrapper.appendChild(main_table)
  main_table.className = "obj_table";
  main_table.style.overflow="auto"

  document.getElementById("objectives_form").appendChild(div_wrapper)*/
  obj_getValues('GET_obj_database')

  /*document.getElementById("objectives_form").style.display = "block"*/

}


function obj_getValues(range) {
    try {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
      }).then((response) => {
        result = response.result
        valuesArray = response.result.values
        obj_printValues(response.result.values)
      });
    } catch (err) {
      console.log(err.message);
      return;
    }
}

function obj_printValues(valuesArray1){

  currentCategory = ''

  for (let i = 0; i < valuesArray1.length; i++){

    if(valuesArray[i][1] != currentCategory){ //create new header
      currentCategory = valuesArray[i][1]

      table1 = document.getElementById("obj_table");
      var row = table1.insertRow()
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1)
      cell0.innerHTML = ""
      cell1.innerHTML = valuesArray[i][1]
      cell1.style.fontSize = "200%"
 
    } 

    table1 = document.getElementById("obj_table");
    var row = table1.insertRow()
    row.id = "tableRow"+i; //this shall not show up in headers!
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    cell0.innerHTML = "<img class='obj_remove_button' src='graphics/edit_alt.png' onclick='objectiveSolved("+1645068860+", "+(i+1)+")'>"
    cell1.innerHTML = valuesArray1[i][0]

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
    }).then(function(response) { obj_reload_table();}) //reload

}

function objectiveSolved(sheetId, rowId){

  console.log(valuesArray[rowId-1][2])

  splitter = valuesArray[rowId-1][2].split(".")
  newDate = new Date(splitter[2],splitter[1]-1,splitter[0])
  sheetsAPI_appendRow([[valuesArray[rowId-1][0]],[valuesArray[rowId-1][1]],["null"], [newGoogleDate(newDate)]], "obj_solved!A:D", null)

  sheetsAPI_deleteRow(sheetId, rowId-1)

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
  const range = "obj_unsolved"
  form_name = document.getElementById("obj_name").value
  form_category = document.getElementById("obj_category").value
  form_createdAt = newGoogleDate("")
  data = [[form_name], [form_category], [form_createdAt]]

  sheetsAPI_appendRow(data, range, obj_reload_table)

}

function obj_reload_table(){
  console.log("VISIT_OBJECTIVES | reload table")
  document.getElementById("obj_table").innerHTML = ""
  sheetsAPI_sortSheet("1645068860")

  setTimeout(() => {
    obj_getValues('GET_obj_database');
  }, 2000)
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

//delete doesnt allow headers in the sheet!
function sheetsAPI_sortSheet(sheetId){
  try {
    // Add additional requests (operations) ...
    const batchUpdateRequest = {
      "requests": [
        {
          "sortRange": {
            "range": {
              "sheetId": sheetId,
              "startRowIndex": 0,
              "endRowIndex": 1000,
              "startColumnIndex": 0,
              "endColumnIndex": 4
            },
            "sortSpecs": [
              {
                "dimensionIndex": 1,
                "sortOrder": "ASCENDING"
              }
            ]
          }
        }
      ]
    };
    gapi.client.sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: batchUpdateRequest,
    }).then((response) => {console.log(response);
    });
  } catch (err) {
    console.log(err);
    return;
  }
}