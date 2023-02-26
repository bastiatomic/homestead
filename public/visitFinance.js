function visitFinance() {
  visitHome()
  document.getElementById("finance_component").style.display = "grid"

  sheetsAPI_getValues(endpoints.GET_finance_groups, printGroups, "UNFORMATTED_VALUE")
  //GET avg_month_distribution_by_budget_period
  sheetsAPI_getValues(endpoints.avg_month_distribution_by_budget_period, clean_line_input, "UNFORMATTED_VALUE")

  sheetsAPI_getValues(endpoints.money_trend_by_start_date, finance_process_line_chart, "UNFORMATTED_VALUE")

}

function fetch_request_input() {
  sheetsAPI_updateValues(
    endpoints.API_SEARCH_PARAMETER,
    [[document.getElementById("finance_search_input").value]], null
  )

  setTimeout(() => {
    sheetsAPI_getValues(endpoints.GET_search_results, printValues);
  }, "500")

}

function printValues(valuesArray) {

  document.getElementById("finance_search_results").innerHTML = ""
  for (let i = 0; i < valuesArray.length; i++) {
    new_element = document.createElement('div')
    p1 = document.createElement("div")
    p2 = document.createElement("div")

    p1.innerHTML = valuesArray[i][1] + " | " + valuesArray[i][2]
    p2.innerHTML = valuesArray[i][0] + ", " + valuesArray[i][3] + " (" + valuesArray[i][4] + ")"


    new_element.appendChild(p1); new_element.appendChild(p2); new_element.appendChild(document.createElement("br"));
    document.getElementById("finance_search_results").appendChild(new_element);

  }
}

function finance_process_line_chart(object) {
  let finance_money_history_data = object

  let finance_money_history_data_clean = {
    "labels": [],
    "data": []
  }

  finance_money_history_data.forEach(element => {
    finance_money_history_data_clean.labels.push(js_date_to_yymmdd(new Date(element[0] * 86400000 - 2209132800000)))
    finance_money_history_data_clean.data.push(parseInt(element[1]))

  });


  let ctx3 = document.getElementById("money_trend_by_start_date").getContext("2d")

  //create new chart
  new Chart(ctx3, add_line_chart_values("line", finance_money_history_data_clean.labels, finance_money_history_data_clean.data, "rgb(61,102,87)"))

}

function add_line_chart_values(type, labels_array, data_array, backgroundColor_array, options = {}) {
  return {
    type: type,
    data: {
      labels: labels_array,
      datasets: [{
        label: "0",
        data: data_array,
        backgroundColor: backgroundColor_array,
        fill: true
      }],
      options: options
    }
  }
}

function js_date_to_yymmdd(date_object) {
  var date = date_object
  return (((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + "." + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '.' + date.getFullYear());

}

function printGroups(valuesArray) {

  for (let i = 0; i < valuesArray.length; i++) {
    table1 = document.getElementById("finance_groups_table");
    var row = table1.insertRow()
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell0.innerHTML = valuesArray[i][0]
    cell1.innerHTML = valuesArray[i][1]
    cell2.innerHTML = (valuesArray[i][2]).toFixed(2)

  }
}

function render_chart(object) {

  node = document.getElementById("finance_spending_diagram").getContext("2d");

  let avg_month_distribution_with_leftover_by_budget_period_chart = new Chart(node, add_chart_values("pie", object.labels, object.data, object.backgroundColor))

  //console.log(avg_month_distribution_with_leftover_by_budget_period_chart)
  //console.log(object)

}

function clean_line_input(object) {

  let object2 = object

  //console.log(object2)

  data2 = {
    "labels": [],
    "data": [],
    "backgroundColor": []
  }

  object2.forEach(element => {
    data2.labels.push(element[0])
    data2.data.push((element[1]))
    if (element[2] != null) {
      data2.backgroundColor.push(element[2])
    } else {
      data2.backgroundColor.push(random_rgba())
    }


  });

  return render_chart(data2)

}

function add_chart_values(type, labels_array, data_array, backgroundColor_array, options = {}) {
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
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 1 + ')';
}
