function showFinance(){
    visitHome()
    console.log("WELCOME TO FINANCE")
    document.getElementById("finance_component").style.display = "grid"
}


function showFinanceInput() {
	visitHome()
	console.log("WELCOME TO FINANCE INPUT")
	document.getElementById("finance_input_component").style.display = "grid" 
}

function showObjectives(){
    visitHome()
    console.log("WELCOME TO OBJECTIVES")
    document.getElementById("objectives_form").style.display = "block"
}

function showHome(){
    console.log("WELCOME TO HOME")
    document.getElementById("objectives_form").style.display = "none"
    document.getElementById("finance_component").style.display = "none"
    document.getElementById("finance_input_component").style.display = "none"
    console.log("All elements are well hidden now.")
}