function showGym(){
    window.open("https://docs.google.com/document/d/10oi5P5nb2f_eQimivl129kXw4Dhxox8YtZfslXgkUGE/edit");
}
function showRecipes(){
    window.open("https://docs.google.com/spreadsheets/d/1O25tNbNDdWpgTM3tswxrfhIxcmG4DKCyVy_0vmo2rio/edit#gid=797264053")
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

        document.getElementById("input_name").value = "";
        document.getElementById("input_value").value = "";


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
            "range": "database!A:F",
            "majorDimension": "COLUMNS"
          };

        try {
            gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: "database!A:F",
            valueInputOption: "RAW",
            resource: body,
            }).then((response) => {
                console.log(response.result);
            });
        } catch (err) {
            console.log("ERROR " + err.message);
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
    console.log("SUCCESS")
}
