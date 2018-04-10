            var meniu;
            var MENU_SERVER_URL = "https://menu-3c993.firebaseio.com/.json";
            var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					meniu = JSON.parse(this.responseText);
					
					drawdetalii();
				}
			};
			xhttp.open("GET", MENU_SERVER_URL, true);
			xhttp.send();
		
		function drawdetalii(){
            var tabel=document.querySelector("#detalii");
			var str="";
            var i=window.location.search.substring(4);
                    str+=`
					<span><img class="imagine" src="${meniu[i].imagine}" alt="nu gasesc imaginea"></span>
                    <h2>${meniu[i].nume}</h2></br></br><div>${meniu[i].reteta}<div>`
			tabel.innerHTML=str;
		}