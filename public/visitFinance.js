function visitFinance(){
    console.log("Welcome to Finance! Cleaning up ...")
    document.getElementById("content").innerHTML = ""


    document.getElementById("content").appendChild(document.getElementById("finance_component"))
    document.getElementById("finance_component").style.display = "grid"

    fetch_groups()



}

function fetch_request_input(){
    send_request(document.getElementById("finance_search_input").value)
}

function send_request(data1){

      try {
        gapi.client.sheets.spreadsheets.values.update({
          spreadsheetId: spreadsheetId,
          range: 'search!B1',
          valueInputOption: 'RAW',
          resource: {"values" : [
            [data1]
        ]},
        }).then((response) => {
          const result = response.result;
        });
      } catch (err) {
       console.log(err.message);
        return;
      }

      setTimeout(() => {
        getValues('search!A5:F25');
      }, "1500")

}

function getValues(range) {
    try {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
      }).then((response) => {
        
        result = response.result
        printValues(result.values)
        const numRows = result.values ? result.values.length : 0;
      });
    } catch (err) {
      console.log(err.message);
      return;
    }
}

function printValues(valuesArray){
    for(let i = 0; i < valuesArray.length; i++){
        new_element = document.createElement('div')
        new_element.appendChild(document.createTextNode(valuesArray[i]));


        document.getElementById("finance_search").appendChild(new_element);

    }
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

function fetch_groups(){

  sheetsAPI_getRows("groups!A:C", printGroups)
}

function sheetsAPI_getRows(range, responseFunction) { // responseFunction uses the result
  try {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range,
    }).then((response) => {
      result = response.result;
      responseFunction(result)
    });
  } catch (err) {
    console.log(err.message);
    return;
  }
}

function printGroups(valuesArray){
  valuesArray = valuesArray.values
  
  for (let i = 0; i < valuesArray.length; i++){
    table1 = document.getElementById("finance_groups_table");
    var row = table1.insertRow()
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell0.innerHTML = valuesArray[i][0]
    cell1.innerHTML = valuesArray[i][1]
    cell2.innerHTML = valuesArray[i][2]

  }
}