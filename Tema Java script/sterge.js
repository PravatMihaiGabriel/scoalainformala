            var parametriiDecodati=decodeURIComponent(window.location.search)
            var parametrii=parametriiDecodati.split("?");
            var idSiPreparat=parametrii[1].split("&");
            var id=idSiPreparat[0].split("=")
            var preparat=idSiPreparat[1].split("=");
            var MENU_DELETE_ITEM_SERVER_URL = "https://menu-3c993.firebaseio.com/"+id[1]+".json"

                 console.log("valoarea lui:", MENU_DELETE_ITEM_SERVER_URL);
                            
            function sterge(form, event){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
                    window.location="meniuadmin.html";
					
				}
			};
			xhttp.open("DELETE", MENU_DELETE_ITEM_SERVER_URL, true);
			xhttp.send();
        }
        
        function numePreparat (){
                var element=document.getElementById("numePreparat");
              
                var sir=`<div class="formular" id="numePreparat">Esti pe cale sa stergi preparatul ${preparat[1]}</div>`;
                element.innerHTML=sir;
     
        }

        function nuSterge(){
            window.location="meniuadmin.html";

        }