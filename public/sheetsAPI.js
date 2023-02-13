//TODO: use (response) or not?
function sheetsAPI_appendRow(data, range, responseFunction) {
    // data as [[0],[1], [2], [3]]
    //range example: database!A:D;  'A-D' will result in 4 arguments from data
    console.log("APPENDING TO: " + range)
    try {
        gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: range,
            valueInputOption: "RAW",
            resource: {
                "values": data,
                "majorDimension": "COLUMNS"
            },
        }).then((response) => {
            if (responseFunction) {
                responseFunction()
            }
        });
    } catch (err) {
        alert(err.message);
        return;
    }

}

//TODO:   "majorDimension": "COLUMNS" is not a valid parameter?
//TODO: check correct append-syntax
// TODO: is response or responseFunction used anywhere?

function sheetsAPI_getValues(range, responseFunction) {
    console.log("FETCHING: " + range)
    try {
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range,
        }).then((response) => {

            responseFunction(response.result.values)
        });
    } catch (err) {
        alert(err.message);
        return;
    }
}

"sheetID: the active sheet; rowID: the row starting by 1"
function sheetsAPI_deleteRow(sheetId, rowId, responseFunction) {

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
    }).then((response) => {
        if (responseFunction) {
            responseFunction()
        }
    });

}