window.onload = function() {
  // do stuff
 for (let i = 6; i <= 22; i ++){
 var ul = document.getElementById("time_list")
 var li = document.createElement("li");
 li.style.height = "58px"
 li.appendChild(document.createTextNode(i+":00"));
 ul.appendChild(li);
 }

 populate_headers()
}
/* ALL SCOPS FOR GOOGLE CALENDAR AND GOOGLE SHEETS

/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

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


async function listMajors2() {

  var request = gapi.client.calendar.events.list({
    'calendarId': 'primary',
    "singleEvents" : true,
    "orderBy" : "startTime",
    "timeMin":  "2022-09-03T00:00:00+02:00",
    "timeMax":  "2022-09-09T00:00:00+02:00",
    //limit: 10
  });

  request.execute(function(event) {
    console.log(event.items);

    var events = event.items

    for (let event of events){

      if (event.start.dateTime != null){
        // create an event box
        var startMinutes = new Date(event.start.dateTime);
        startMinutes = startMinutes.getHours()*60 + startMinutes.getMinutes() -6*60
    
        var endMinutes = new Date(event.end.dateTime);
        endMinutes = endMinutes.getHours()*60 + endMinutes.getMinutes() -6*60
    
        var day_today = new Date().getDate()
        var day_this = new Date(event.start.dateTime).getDate()
        var date_distance = day_this - day_today
      } else {
        // create an event from 6h - 22h
        var startMinutes = 0
        endMinutes =23*60 -6*60
  
        var day_today = new Date().getDate()
        var day_this = new Date(event.start.date).getDate()
        var date_distance = day_this - day_today
      }
  
     
      create_bounding_box(event.summary, startMinutes, endMinutes, date_distance)
  
    }

  });
}

function create_bounding_box(name, startMinutes, endMinutes, date_distance){
  //console.log("start:"+startMinutes+"; end: "+endMinutes)
  var board_bounding_box = document.getElementById('events_board')
  var new_box = document.createElement("div");
  new_box.className = "bounding_box";
  new_box.style.top = startMinutes + board_bounding_box.getBoundingClientRect().y
  var days_distance_position_modifier = board_bounding_box.getBoundingClientRect().width/5
  new_box.style.left = date_distance*days_distance_position_modifier+ board_bounding_box.getBoundingClientRect().x
  new_box.style.height = (endMinutes-startMinutes)+"px"
  new_box.style.width = days_distance_position_modifier*0.9
  new_box.style.position = "absolute"
  new_box.style.borderRadius = "5px"
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  new_box.style.backgroundColor = bgColor
  new_box.innerHTML = name

  board_bounding_box.appendChild(new_box)

}
  


function populate_headers(){
  for (let i = 0; i<=4; i++){
    var tmp_name = document.getElementById("day_"+i)
    var tmp_date = new Date()

    var today = new Date(tmp_date.setDate(tmp_date.getDate() + i))

    d = today.getDate()
    m = today.toLocaleString('default', { month: 'long' })
    y = today.getFullYear()

    tmp_name.innerHTML = d+". "+m+" "+y


  }
}