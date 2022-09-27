function visitFinance(){
    console.log("Welcome to Finance! Cleaning up ...")
    document.getElementById("content").innerHTML = ""

    const node = document.createElement("button");
    node.appendChild(document.createTextNode("Send request"));
    node.onclick = function() {fetch_request_input()};

    const input1 = document.createElement("input");
    input1.id = "input"
    input1.value = "Gehalt"



    document.getElementById("content").appendChild(input1);
    document.getElementById("content").appendChild(node);

}

function fetch_request_input(){
    send_request(document.getElementById("input").value)
}

function send_request(data1){

    console.log("Sending request ...")

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
          console.log(`${result.updatedCells} cells updated.`);
        });
      } catch (err) {
       console.log(err.message);
        return;
      }

      setTimeout(getValues('search!A5:F25'),500)

}

function getValues(range) {
    try {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
      }).then((response) => {
        console.log(response)
        result = response.result
        const numRows = result.values ? result.values.length : 0;
        console.log(`${numRows} rows retrieved.`);
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


        document.getElementById("content").appendChild(new_element);

    }
}
