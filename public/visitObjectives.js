function visitObjectives() {
    document.getElementById("content").innerHTML = ""

    var heading = document.createElement("h1"); document.getElementById("content").appendChild(heading) //create element and add it instantly to DOM

    heading.innerText ="Willkommen!"

    getValues('objectives!A2:E')


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
        printValues(response.result.values)
      });
    } catch (err) {
      console.log(err.message);
      return;
    }
}

function printValues(value){
    document.write(value)
}