var tokenClient;
var access_token;

const CLIENT_ID = '837767818302-cbn24e9j41t8bfhmosgvvs200q1t991g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCOcTe261vaOow-cZPbTiMkBeRANdOweeA';

const DISCOVERY_DOC = ['https://sheets.googleapis.com/$discovery/rest?version=v4', 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/calendar';

function initTokenClient() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        prompt: 'none',
        callback: (tokenResponse) => {
            access_token = tokenResponse.access_token;
        },
    });
    tokenClient.requestAccessToken();
    //setTimeout(listMajors, 3000) //ToDo: make requests in 1000ms intervall

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

/* ----------------------------------
    finance */

function finance_submit(){
    document.getElementById("submit_button").disabled = true;
    setTimeout(function(){document.getElementById("submit_button").disabled = false;},1000)

    var input = {
        name: document.getElementById("input_name").value,
        value: document.getElementById("input_value").value,
        counterpart: document.getElementById("input_counterpart").value,
        category: document.getElementById("input_category").value,
        account: document.getElementById("input_account").value,
        date: valid_date(document.getElementById("input_date").value),
    }

    if(!valid_input(input)){
        console.log("INPUT BUILD FAILED")
        return
    } else {
        console.log("INPUT BUILD VALID")
        console.log(input)

        //sending package to database
        console.log("date: " + input.date)
        const body = {
            "values": [
              [
                input.date
              ],
              [
                input.name
              ],
              [
                Number(input.value)
              ],
              [
                input.counterpart
              ],
              [
                input.category
              ],
              [
                input.account
              ]
            ],
            "range": "mock_database!A:F",
            "majorDimension": "COLUMNS"
          };

        try {
            gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: "1O25tNbNDdWpgTM3tswxrfhIxcmG4DKCyVy_0vmo2rio",
            range: "mock_database!A:F",
            valueInputOption: "RAW",
            resource: body,
            }).then((response) => {
                console.log(response.result);
            });
        } catch (err) {
            document.getElementById('content').innerText = err.message;
            return;
        }

    }

}

function valid_date(date_object){
    var tmp_date

    //no unique date provided
    if (date_object == ""){
        tmp_date =  new Date()
    }

    //date provided, time has to be generated
    else if (typeof date_object === 'string' ){

        tmp_date = new Date(date_object)
        today1 = new Date()

        tmp_date = new Date(tmp_date.getFullYear(), tmp_date.getMonth()+1, tmp_date.getDate(), today1.getHours(), today1.getMinutes(), today1.getSeconds())
    }
    tmp_date = GoogleDate(tmp_date)
    console.log(tmp_date)
    return tmp_date

}

function GoogleDate( JSdate ) { 
    var D = new Date(JSdate) ;
    var Null = new Date(Date.UTC(1899,11,30,0,0,0,0)) ; // the starting value for Google
    return ((D.getTime()  - Null.getTime())/60000 - D.getTimezoneOffset()) / 1440 ;
}

function valid_input(input_object){
    if(input_object.name == ""){
        return false
    }
    if(input_object.value == ""){
        return false
    }
    if(input_object.counterpart == ""){
        return false
    }
    if(input_object.category == "..."){
        return false
    }
    return true;
}