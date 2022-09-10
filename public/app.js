var tokenClient;
var access_token;

const CLIENT_ID = '837767818302-cbn24e9j41t8bfhmosgvvs200q1t991g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCOcTe261vaOow-cZPbTiMkBeRANdOweeA';
const ACTIVATED_GOOGLE_LOGIN = true
const DISCOVERY_DOC = ['https://sheets.googleapis.com/$discovery/rest?version=v4', 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/gmail.labels';

function initTokenClient(prompt_value) {

    if(ACTIVATED_GOOGLE_LOGIN){
        tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        prompt: prompt_value,
        callback: (tokenResponse) => {
            //ERROR: user interaction required
            access_token = tokenResponse.access_token;
            if (typeof tokenResponse.access_token == 'undefined'){
                console.log("CALLING RE-ISSUE SERVICE ...")
                setTimeout(getToken,1000)
            }
        },
    });
    tokenClient.requestAccessToken();
    //setTimeout(listMajors, 3000) //ToDo: make requests in 1000ms intervall

    }

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

function getToken() {

    initTokenClient("consent")
    console.log("RE-ISSUE TOKEN")
    //tokenClient.requestAccessToken();
}


/* ----------------------------------
    finance */

function finance_submit(){
    document.getElementById("submit_button").disabled = true;
    setTimeout(function(){document.getElementById("submit_button").disabled = false;},1000)

    //flow: get initial object values
    var input = {
        name: document.getElementById("input_name").value,
        value: document.getElementById("input_value").value,
        counterpart: document.getElementById("input_counterpart").value,
        category: document.getElementById("input_category").value,
        account: document.getElementById("input_account").value,
        date: valid_date(document.getElementById("input_date").value),
    }

    //flow: proceed if input is valid, otherwise return generic error
    if(valid_input(input)){
        console.log("INPUT BUILD VALID")

        //sending package to database
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
            console.log("ERROR" + err.message);
            return;
        }
       
    } else {
        console.log("INPUT BUILD FAILED")
        window.alert("Some input is not valid. Kindly re-check your values.")
        return

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