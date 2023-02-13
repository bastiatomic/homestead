const prod_spreadsheet ={
    "id": '1O25tNbNDdWpgTM3tswxrfhIxcmG4DKCyVy_0vmo2rio',
}
const mock_spreadsheet ={
    "id": "1qFlBuwopUtnxvVZ-K0_yZiQMhynqQobO2yUVZ6bS4yo",
}
const spreadsheetId = prod_spreadsheet.id
const mocking_use_login = true

const endpoints = {
    "GET_finance_groups": "GET_finance_groups",
    "GET_obj_database":"GET_obj_database",
    "GET_recipes" : "GET_recipes",
    "GET_search_results": "GET_search_results",
    "API_SEARCH_PARAMETER": "API_SEARCH_PARAMETER",
    "GET_objectives_unsolved": "GET_objectives_unsolved",
    "GET_finance_database":"GET_finance_database"
}

var tokenClient;
var access_token;
var activeGapi = false;
var activeGis = false;

const CLIENT_ID = '837767818302-cbn24e9j41t8bfhmosgvvs200q1t991g.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCOcTe261vaOow-cZPbTiMkBeRANdOweeA';
const DISCOVERY_DOC = ['https://sheets.googleapis.com/$discovery/rest?version=v4', 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/gmail.labels';

function initTokenClient(prompt_value) {

    
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        prompt: prompt_value,
            callback: (tokenResponse) => {
                access_token = tokenResponse
                console.log(access_token)
                //ERROR: user interaction required
                activeGis = true;
                check_active_gapi_gis()
                if (typeof tokenResponse.access_token == 'undefined'){
                    console.log("CALLING RE-ISSUE SERVICE ...")
                    setTimeout(getToken,1000)
                }
            },
        }); 
        // call to the GIS backend (popup screen)
        tokenClient.requestAccessToken();
    

}

function gapi_onload() {
    gapi.load('client', gapi_init_client);
}

async function gapi_init_client() {
    await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOC
    });
    console.log("GAPI LOADED")
    activeGapi = true;
    check_active_gapi_gis()
}

function getToken() {

    initTokenClient("consent")
    console.log("RE-ISSUE TOKEN")
}


function check_active_gapi_gis(){
    if(activeGapi && activeGis){
        console.log("GAPI AND OAUTH2 SUCCESSFULL")
        //do stuff
        successfull_login()

    }
}

function successfull_login(){
    document.getElementById("load_cat").innerHTML = ""
    
    console.log("To kill the cat ...")
    visitFinanceInput()
    visitFinance()
    visitObjectives()
    loadRecipes()
    visitHome()
    console.log("Cleared content after login")
    
}
