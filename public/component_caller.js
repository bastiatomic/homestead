function visitHome(){
    document.getElementById("objectives_form").style.display = "none"
    document.getElementById("finance_component").style.display = "none"
    document.getElementById("finance_input_component").style.display = "none"
    document.getElementById("journal_component").style.display = "none"
    document.getElementById("recipes_component").style.display ="none"
    console.log("All elements are well hidden now.")

}


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


function showJournal(){
    window.open("https://www.notion.so/Journaling-habits-gratitude-a1c635871ce44374ade13978c7b7c6ae");

}

function showRecipes(){}