const spreadsheetId = '1O25tNbNDdWpgTM3tswxrfhIxcmG4DKCyVy_0vmo2rio'
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
            //ERROR: user interaction required
            activeGis = true;
            check_active_gapi_gis()
            if (typeof tokenResponse.access_token == 'undefined'){
                console.log("CALLING RE-ISSUE SERVICE ...")
                setTimeout(getToken,1000)
            }
        },
    }); 
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

function myImageList(){
    return access_token;
}

function myImageList2(){
    return hello;
}

function check_active_gapi_gis(){
    if(activeGapi && activeGis){
        document.getElementById("gapi_gis_status").style.backgroundColor="green"
        document.getElementById("gapi_gis_status").innerText = "status: online"
        console.log("GAPI AND OAUTH2 SUCCESSFULL")

        const elements = document.getElementsByClassName("technical2");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
    }

        // init website
        visitFinanceInput()
    }

}