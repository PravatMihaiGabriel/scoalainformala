            var id=window.location.search.substring(4);
            var PRODUSE_EDIT_ITEM_SERVER_URL = "https://produse-cae5b.firebaseio.com/"+id+".json"
            var produs;

                function afiseazaProdus(element, event){
				event.preventDefault();
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
                      console.log(this.responseText);
                      produs=JSON.parse(this.responseText);
                      document.getElementById('denumire').value=produs.denumire;
                      document.getElementById('imagine').value=produs.imagine;
                      document.getElementById('descriere').value=produs.descriere;
                      document.getElementById('pret').value=produs.pret;
                      document.getElementById('stoc').value=produs.stoc;
					}
                };
                
				xhttp.open("GET", PRODUSE_EDIT_ITEM_SERVER_URL, true);
                xhttp.send();
 	
            }
            
            function sendAsJson(form, event){
				event.preventDefault();
                var obj = { "cod": produs.cod, "denumire": document.getElementById('denumire').value, "imagine": document.getElementById('imagine').value, 
                "descriere": document.getElementById('descriere').value, "pret": document.getElementById('pret').value, 
                "stoc": document.getElementById('stoc').value }
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
                      console.log(this.responseText);
                      window.location="Magazinuldediverseadmin.html";
					}
                };
    
				xhttp.open("PUT", PRODUSE_EDIT_ITEM_SERVER_URL, true);
				xhttp.send(JSON.stringify(obj));	
				
			}