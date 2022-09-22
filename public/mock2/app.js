window.onload= () => {
    console.log(access_token)
    console.log(CLIENT_ID)
    console.log(myImageList())
    console.log(myImageList2())
}

function getValues() {
    tokenClient.requestAccessToken();
    try {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'database!A1:A1',
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