var firstInterest;
var firstLanguage;
var firstLocation;

function addRow(tableID, clickedButton) {
 
            var table = document.getElementById(tableID);
 
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
 
            var cell1 = row.insertCell(0);
			cell1.className = 'tableCell';
            
			cell1.innerHTML = clickedButton;
			row.insertCell(0).innerHTML= '<button class="btn languageButton" type="button" value = "Delete" onclick="Javascript:deleteRow(this)">';
			languages.push(clickedButton)
        }
		
		function deleteRow(obj) {
			
			
			 var index = obj.parentNode.parentNode.rowIndex;
			var table = document.getElementById("chosenTable");
			table.deleteRow(index);
		   
		}