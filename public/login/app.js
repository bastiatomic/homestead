
var tokenClient;
var access_token;

const CLIENT_ID = '837767818302-cbn24e9j41t8bfhmosgvvs200q1t991g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCOcTe261vaOow-cZPbTiMkBeRANdOweeA';

const DISCOVERY_DOC = ['https://sheets.googleapis.com/$discovery/rest?version=v4', 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/calendar';

function initTokenClient() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/calendar',
        prompt: 'none',
        callback: (tokenResponse) => {
            access_token = tokenResponse.access_token;
        },
    });
    tokenClient.requestAccessToken();
    setTimeout(listMajors, 3000) //ToDo: make requests in 1000ms intervall

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
function foo(){

    getToken()
}

function getToken() {
    // Re-entrant function to request user consent.
    // Returns an access token to the callback specified in google.accounts.oauth2.initTokenClient
    // Use a user gesture to call this function and obtain a new, valid access token
    // when the previous token expires and a 401 status code is returned by Google API calls.
    tokenClient.requestAccessToken();
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
