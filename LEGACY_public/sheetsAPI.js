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

function sheetsAPI_getValues(range, responseFunction, valueRenderOption = "FORMATTED_VALUE") {
    console.log("FETCHING: " + range + " as " + valueRenderOption)
    try {
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range,
            valueRenderOption: valueRenderOption,
        }).then((response) => {

            if(responseFunction){
                responseFunction(response.result.values)
            }
            
        });
    } catch (err) {
        alert(err.message);
        return;
    }
}

function sheetsAPI_updateValues(range, values, responseFunction){
    //values = [[x], [y], [z]]
    console.log("UPDATING: " + range)

    gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: 'RAW',
        resource: {
        "values": values
        },
    }).then((response) => {
        if (responseFunction) {
            responseFunction()
            
        }
    });
}