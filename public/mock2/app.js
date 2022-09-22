window.onload= () => {
    console.log("hello")
}

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
            console.log(tokenResponse)
            document.getElementById("tokenInDocument").innerHTML="Token: "+access_token.substring(0,6);
            if (typeof tokenResponse.access_token == 'undefined'){
                console.log("CALLING RE-ISSUE SERVICE ...")
                setTimeout(getToken,1000)
            }
        },
    });
    tokenClient.requestAccessToken();
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
