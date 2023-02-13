//TODO: "gapi.client.sheets.spreadsheets" is only allowed to exist in sheetsAPI.js, nowhere else!

function showGym(){
    window.open("https://docs.google.com/document/d/10oi5P5nb2f_eQimivl129kXw4Dhxox8YtZfslXgkUGE/edit");
}
function loadRecipes(){
    //window.open("https://docs.google.com/spreadsheets/d/1O25tNbNDdWpgTM3tswxrfhIxcmG4DKCyVy_0vmo2rio/edit#gid=797264053")
    sheetsAPI_getValues("GET_recipes", renderRecipes)
}

function renderRecipes(data){

    for (let i = 1; i < data.length; i++) {

        if(data[i][1] == ""){
            data[i][1] = "favicon.ico"
        }

        table1 = document.getElementById("recipes_table");
        var row = table1.insertRow()
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        cell0.innerHTML = data[i][0]
        cell1.innerHTML = '<img src='+data[i][1]+' width="100" height="56">'
        cell2.innerHTML = '<div><a href="'+data[i][2]+'">'+"Link"+'</a></div>';

    }

}

/* ----------------------------------
    finance */
function finance_submit(){
    document.getElementById("submit_button").disabled = true;
    setTimeout(function(){document.getElementById("submit_button").disabled = false;},1000)

    //flow: get initial object values
    //TODO this var is created twice again but is bound to a variable. maybe check is separatly?
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

        document.getElementById("input_name").value = "";
        document.getElementById("input_value").value = "";

        //sending package to database
        let data = [[input.date],[input.name],[Number(input.value)],[input.counterpart],[input.category],[input.account]]

        sheetsAPI_appendRow(data, "database!A:F", null)

    } else {
        console.log("INPUT BUILD FAILED")
        window.alert("Some input is not valid. Kindly re-check your values.")
   
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

        tmp_date = new Date(tmp_date.getFullYear(), tmp_date.getMonth(), tmp_date.getDate(), today1.getHours(), today1.getMinutes(), today1.getSeconds())
    }
    return GoogleDate(tmp_date)

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

function journalSubmit(){
    date = document.getElementById("journal_date").value
    content = document.getElementById("journal_content").value

    console.log(date)
    console.log(content)

    sheetsAPI_appendRow([[date], [content]], "journal!A:B", journalSuccess);
}

function journalSuccess(){
    alert("JOURNAL ENTRY ADDED")
}
