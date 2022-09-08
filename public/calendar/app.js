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


  var mock_event1 = {
    'summary': 'Gym',
    'start': {
      'dateTime': '2022-09-03T19:00:00+02:00',
      'timeZone': 'Europe/Berlin'
    },
    'end': {
      'dateTime': '2022-09-03T21:30:00+02:00',
      'timeZone': 'Europe/Berlin'
    }
  };
  var mock_event2 = {
    'summary': 'Gym',
    'start': {
      'dateTime': '2022-09-05T19:00:00+02:00',
      'timeZone': 'Europe/Berlin'
    },
    'end': {
      'dateTime': '2022-09-05T21:30:00+02:00',
      'timeZone': 'Europe/Berlin'
    }
  };

  var mock_event3 = {
    'summary': 'Gym',
    'start': {
      'dateTime': '2022-09-07T19:00:00+02:00',
      'timeZone': 'Europe/Berlin'
    },
    'end': {
      'dateTime': '2022-09-07T21:30:00+02:00',
      'timeZone': 'Europe/Berlin'
    }
  };

  var mock_event4 = {
    'summary': 'Mock_Title4',
    'start': {
      'date': '2015-09-04',
      'timeZone': 'Europe/Berlin'
    },
    'end': {
      'date': '2015-09-04',
      'timeZone': 'Europe/Berlin'
    }
  };

 var events = [mock_event1, mock_event2, mock_event3]

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
