window.onload = function() {
  /*  google.accounts.id.initialize({
        client_id: '837767818302-cbn24e9j41t8bfhmosgvvs200q1t991g.apps.googleusercontent.com',
        callback: handleCredentialResponse
      });
      console.log("SHOW GIS")
      google.accounts.id.prompt();*/
}


// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = '837767818302-cbn24e9j41t8bfhmosgvvs200q1t991g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAlln1qR1gkv17woBHxo1Ti2TMa4zBFVjw';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = ['https://sheets.googleapis.com/$discovery/rest?version=v4', 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/calendar';

let tokenClient;
let client;


function onLoad_gisLoaded(){
    const client = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        callback: "onTokenResponse",
        scope: SCOPES,
    });
    client.requestAccessToken();

}


function onLoad_gapiLoaded() {
    gapi.load('client', intializeGapiClient);
}


async function intializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOC,
    });
    console.log("GAPI LOADED")
}

function handleCredentialResponse(response) {

    console.log(response.credential);

 }

 async function listMajors() {
    let response;
    try {
      // Fetch first 10 files
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1O25tNbNDdWpgTM3tswxrfhIxcmG4DKCyVy_0vmo2rio',
        range: 'database!A1:F100',
      });
    } catch (err) {
      document.getElementById('content').innerText = err.message;
      return;
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
      document.getElementById('content').innerText = 'No values found.';
      return;
    }
    // Flatten to string to display
    const output = range.values.reduce(
        (str, row) => `${str}${row[0]},${row[1]},${row[2]},${row[3]}, ${row[4]}, ${row[5]}\n`,`\n`);
    document.getElementById('content').innerText = output;
  }