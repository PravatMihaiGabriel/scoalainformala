                var MENU_ADD_ITEM_SERVER_URL = "https://menu-3c993.firebaseio.com/.json";
 
                function sendAsJson(form, event){
				event.preventDefault();
				
                var obj = { "nume": document.getElementById('nume').value, "imagine": document.getElementById('url').value, 
                "reteta": document.getElementById('reteta').value, "ingrediente": document.getElementById('ingrediente').value }

				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
                      console.log(this.responseText);
                      window.location="meniuadmin.html";
					}
                };
                console.log(obj);
				xhttp.open("POST", MENU_ADD_ITEM_SERVER_URL, true);
				xhttp.send(JSON.stringify(obj));	
			    }