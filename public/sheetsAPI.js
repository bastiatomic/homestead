function sheetsAPI_appendRow(data, range, responseFunction){
    // data as [[0],[1], [2], [3]]
    //range example: database!A:D;  'A-D' will result in 4 arguments from data
  
    let body = {
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
        }).then((response) => {if(responseFunction){
            responseFunction()
        }
        });
    } catch (err) {
        console.log("ERROR " + err.message);
        return;
    }
  
}

function sheetsAPI_getValues(range, responseFunction) {
    try {
        gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
        }).then((response) => {

        responseFunction(response.result.values)
        });
    } catch (err) {
        console.log(err.message);
        return;
    }
}