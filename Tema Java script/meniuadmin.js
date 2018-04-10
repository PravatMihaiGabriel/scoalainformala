var meniu;
            var MENU_SERVER_URL = "https://menu-3c993.firebaseio.com/.json";

            var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					meniu = JSON.parse(this.responseText);
					
					drawmeniu();
				}
			};
			xhttp.open("GET", MENU_SERVER_URL, true);
			xhttp.send();
		
		function drawmeniu(){
            var element=document.getElementById("imagineLoading");
            element.classList.remove("imagineLoading");
            element.classList.add("ascundeImagine");
            var tabel=document.querySelector("#meniu tbody");
			var str="";
            
			for(i in meniu){ 
                    str+=`<tr>
					<td><span ><img class="imagine" src="${meniu[i].imagine}" alt="nu gasesc imaginea"></span></td>
                    <td><h2>${meniu[i].nume}</h2></br></br><div>${meniu[i].ingrediente}<div></td>
                        <td><a href="modifica.html?id=${i}">
                    <input class="butonModifica" type="button" value="Modifica"/></a></td>
                    <td><a href="sterge.html?id=${i}&nume=${meniu[i].nume}">
                    <input class="butonSterge" type="button" value="Sterge"/></a></td>
				</tr>`;}
				
			tabel.innerHTML=str;
		}