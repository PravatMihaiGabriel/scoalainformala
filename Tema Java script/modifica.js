            var id=window.location.search.substring(4);
            
            var MENU_EDIT_ITEM_SERVER_URL = "https://menu-3c993.firebaseio.com/"+id+".json"

                function afiseazaPreparat(element, event){
				event.preventDefault();
		
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
                      console.log(this.responseText);
                      var preparat=JSON.parse(this.responseText);
                      document.getElementById('nume').value=preparat.nume;
                      document.getElementById('url').value=preparat.imagine;
                      document.getElementById('reteta').value=preparat.reteta;
                      document.getElementById('ingrediente').value=preparat.ingrediente;

					}
                };
                
				xhttp.open("GET", MENU_EDIT_ITEM_SERVER_URL, true);
                xhttp.send();
 	
            }
            
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
				xhttp.open("PUT", MENU_EDIT_ITEM_SERVER_URL, true);
				xhttp.send(JSON.stringify(obj));	
				
			}