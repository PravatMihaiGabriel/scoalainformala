            var parametriiDecodati=decodeURIComponent(window.location.search)
            var parametrii=parametriiDecodati.split("?");
            var idSiProdus=parametrii[1].split("&");
            var id=idSiProdus[0].split("=")
            var produs=idSiProdus[1].split("=");
            var PRODUSE_DELETE_ITEM_SERVER_URL = "https://produse-cae5b.firebaseio.com/"+id[1]+".json";
                            
            function sterge(form, event){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
                    window.location.assign("Magazinuldediverseadmin.html");	
				}
			};
			xhttp.open("DELETE", PRODUSE_DELETE_ITEM_SERVER_URL, true);
			xhttp.send();
        }
        
        function numeProdus(){
                var element=document.getElementById("numeProdus");
                var sir=`Esti pe cale sa stergi produsul ${produs[1]}`;
                element.innerHTML=sir;
        }

        function nuSterge(){
            window.location="Magazinuldediverseadmin.html";
        }