                var PRODUSE_ADD_ITEM_SERVER_URL = "https://produse-cae5b.firebaseio.com/.json";
                var codmax;
 function sendAsJson(form, event){
 event.preventDefault();
 var obj;
        var xhttp1 = new XMLHttpRequest();
		xhttp1.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                produse=JSON.parse(this.responseText);
                max (produse);
                obj = { "cod": codmax, "denumire": document.getElementById('denumire').value, "imagine": document.getElementById('imagine').value, 
                "descriere": document.getElementById('descriere').value, "pret": document.getElementById('pret').value, 
                "stoc": document.getElementById('stoc').value }
                var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            window.location="Magazinuldediverseadmin.html";
            }
            };
 
        xhttp.open("POST", PRODUSE_ADD_ITEM_SERVER_URL, true);
        xhttp.send(JSON.stringify(obj));              
		}
        };
                
		xhttp1.open("GET", PRODUSE_ADD_ITEM_SERVER_URL, true);
        xhttp1.send();
}

 function max (ceva){
     var maxim=1;
     var contor=0;
     for(i in ceva){
         contor=contor+1;
         if(ceva[i].cod>maxim){
             maxim=parseInt(ceva[i].cod);
         }
     }
     if(contor>0){codmax=maxim+1;}
     else { codmax=maxim;}
 }