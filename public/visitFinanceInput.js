
function visitFinanceInput() {
    document.getElementById("content").innerHTML = ""

	let code = "";
	code += "<div id=\"finance_input\" style=\"display:flex; justify-content: center;\">\n";
	code += "\t<div style=\"width: 30%;\" >\n";
	code += "\t\t<h1 style=\"text-align:center;\">Add New Transaction</h1>\n";
	code += "\t\t<div class=\"input_box\">\n";
	code += "\t\t\t<label>Name</label>\n";
	code += "\t\t\t<input id=\"input_name\" />\n";
	code += "\t\t</div>\n";
	code += "\t\t\n";
	code += "\t\t<div class=\"input_box\">\n";
	code += "\t\t\t<label>Wert</label>\n";
	code += "\t\t\t<input id=\"input_value\" type=\"number\"/>\n";
	code += "\t\t</div>\n";
	code += "\t\t\n";
	code += "\t\t<div class=\"input_box\">\n";
	code += "\t\t\t<label>Andere Partei</label>\n";
	code += "\t\t\t<input id=\"input_counterpart\"/>\n";
	code += "\t\t</div>\n";
	code += "\t\t\n";
	code += "\t\t<div class=\"input_box\">\n";
	code += "\t\t  <select id=\"input_category\" class=\"button_box\">\n";
	code += "\t\t\t<option> ... </option>\n";
	code += "\t\t\t<option> Bildung </option>\n";
	code += "\t\t\t<option> Diverses </option>\n";
	code += "\t\t\t<option> Filme&Serien </option>\n";
	code += "\t\t\t<option> Freizeit </option>\n";
	code += "\t\t\t<option> Gehalt </option>\n";
	code += "\t\t\t<option> Geschenke </option>\n";
	code += "\t\t\t<option> Haushalt </option>\n";
	code += "\t\t\t<option> Kleidung </option>\n";
	code += "\t\t\t<option> Lebensmittel </option>\n";
	code += "\t\t\t<option> Miete </option>\n";
	code += "\t\t\t<option> Mobilfunk </option>\n";
	code += "\t\t\t<option> Technik </option>\n";
	code += "\t\t\t<option> Transport </option>\n";
	code += "\t\t  </select>\n";
	code += "\t\t\t<label>Kategorie</label>\n";
	code += "\t\t</div>\n";
	code += "\t\t\n";
	code += "\t\t<div class=\"input_box\">\n";
	code += "\t\t  <select id=\"input_account\" class=\"button_box\">\n";
	code += "\t\t\t<option>Deutsche Bank</option>\n";
	code += "\t\t\t<option>Bargeld</option>\n";
	code += "\t\t\t<option>PayPal</option>\n";
	code += "\t\t\t<option>Commerzbank</option>\n";
	code += "\t\t  </select>\n";
	code += "\t\t\t<label>Account</label>\n";
	code += "\t\t</div>\n";
	code += "\t\t\n";
	code += "\t\t<div class=\"input_box\">\n";
	code += "\t\t\t<label>Datum</label>\n";
	code += "\t\t\t<input id=\"input_date\" type=\"date\"/>\n";
	code += "\t\t</div>\n";
	code += "\t\t\n";
	code += "\t\t<button class=\"button_box\" id=\"submit_button\" onclick=\"finance_submit()\">💾 Save</button>\n";
	code += "\t</div>\n";
	code += "  </div>\n";
    
    document.getElementById("content").innerHTML = code;
}


