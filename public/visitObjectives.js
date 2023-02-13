var main_table;
var valuesArray = [];

function visitObjectives() {
  visitHome()
  console.log("WELCOME TO OBJECTIVES")

  obj_reload_table()

}

function obj_send() {
  form_name = document.getElementById("obj_name").value
  form_category = document.getElementById("obj_category").value
  form_createdAt = newGoogleDate("")
  data = [
    [form_name],
    [form_category],
    [false],
    [form_createdAt]
  ]

  sheetsAPI_appendRow(data, "GET_objectives_list", obj_reload_table)

  document.getElementById("obj_name").value = ""
  document.getElementById("obj_category").value = ""

}

function objectiveSolved(rowId) {

  sheetsAPI_updateValues("objectives!C" + rowId, [
    [true]
  ], obj_reload_table)

}

function obj_reload_table() {
  console.log("VISIT_OBJECTIVES | refresh table")
  document.getElementById("obj_table").innerHTML = ""

  setTimeout(() => {
    sheetsAPI_getValues(endpoints.GET_objectives_unsolved, obj_printValues);
  }, "500")
}

function obj_printValues(valuesArray) {

  currentCategory = ''

  for (let i = 1; i < valuesArray.length; i++) {

    if (valuesArray[i][1] != currentCategory) { //create new header
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
    row.id = "tableRow" + i; //this shall not show up in headers!
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    cell0.innerHTML = "<img class='obj_remove_button' src='graphics/edit_alt.png' onclick='objectiveSolved(" + (valuesArray[i][2]) + ")'>"
    cell1.innerHTML = valuesArray[i][0]
    cell0.classList.add("obj_remove_button")
    //sheetsAPI_updateValues

  }
}

function newGoogleDate(value) {
  var D;
  if (!value) {
    D = new Date();
  } else {
    D = new Date(value);
  }
  var Null = new Date(Date.UTC(1899, 11, 30, 0, 0, 0, 0)); // the starting value for Google
  return ((D.getTime() - Null.getTime()) / 60000 - D.getTimezoneOffset()) / 1440;
}