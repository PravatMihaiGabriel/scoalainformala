            var meniu;
            var MENU_SERVER_URL = "https://menu-3c993.firebaseio.com/.json";

            var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					meniu = JSON.parse(this.responseText);
					
					cautaIngrediente();
				}
			};
			xhttp.open("GET", MENU_SERVER_URL, true);
			xhttp.send();
		
      function cautaIngrediente() {            
            var elemIngrediente = document.getElementById("cautare");
            var ingredientNou=elemIngrediente.value;           
            var tabel=document.querySelector("#meniu tbody");
			var str="";
            
			for(i in meniu){
                if(meniu[i].ingrediente.indexOf(ingredientNou)===-1){
                    continue;
                }
                    str+=`<tr>
					<td><span><img class="imagine" src="${meniu[i].imagine}" alt="nu gasesc imaginea"></span></td>
                    <td><h2>${meniu[i].nume}</h2></br></br><div>${meniu[i].ingrediente}<div></td>
                    <td><a href="detalii.html?id=${i}">
                    <input class="butonDetalii" type="button" value="Detalii"/></a></td>
				</tr>`;}
				
			tabel.innerHTML=str;

            elemIngrediente.value="";   
        }

        function valideazaIngrediente(element,eveniment){
        var codTasta=eveniment.keyCode;
        if(codTasta===13){cautaIngrediente(element, eveniment);}       
            
        }