function visitFinance(){
  visitHome()
  document.getElementById("finance_component").style.display = "grid"

  fetch_groups()

  //GET avg_month_distribution_by_budget_period
  sheetsAPI_getRows("avg_month_distribution_by_budget_period", clean_line_input, "UNFORMATTED_VALUE")

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

function sheetsAPI_getRows(range,responseFunction, valueRenderOption = "FORMATTED_VALUE" ) { // responseFunction uses the result
  try {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range,
      valueRenderOption: valueRenderOption,
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

function render_chart(object){

  node = document.getElementById("finance_spending_diagram").getContext("2d");
  
  let avg_month_distribution_with_leftover_by_budget_period_chart = new Chart(node, add_chart_values("pie", object.labels, object.data, object.backgroundColor) )

  console.log(avg_month_distribution_with_leftover_by_budget_period_chart)
  console.log(object)

}

function clean_line_input(object){

  let object2 = object.values

  console.log(object2)

  data2 = {
    "labels": [],
    "data": [],
    "backgroundColor": []
  }

 object2.forEach(element => {
    data2.labels.push(element[0])
    data2.data.push((element[1]))
    if(element[2] != null){
      data2.backgroundColor.push(element[2])
    } else {
      data2.backgroundColor.push(random_rgba())
    }


  });

  return render_chart(data2)

}

function add_chart_values(type, labels_array, data_array, backgroundColor_array, options = {}){
  return {
    type: type,
    data: {
        labels: labels_array,
        datasets: [{
            data: data_array,
            backgroundColor: backgroundColor_array
        }],
        options: options
    }
  }
}

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 1 + ')';
}
