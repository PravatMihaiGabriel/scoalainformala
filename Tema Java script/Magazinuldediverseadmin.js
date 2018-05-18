
        var produse;
        var a=0;
            var PRODUSE_SERVER_URL = "https://produse-cae5b.firebaseio.com/.json";
            var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
                    produse = JSON.parse(this.responseText);
                    /*if(a=0){
                        location.reload(true);
                        a=1;
                    }*/
					drawproduse();
				}
			};
			xhttp.open("GET", PRODUSE_SERVER_URL, true);
			xhttp.send();
		
		function drawproduse(){
            var element=document.getElementById("imagineLoading");
            element.classList.remove("imagineLoading");
            element.classList.add("ascundeImagine");
            var tabel=document.querySelector("#produse tbody");
            var str="";
            var tabel1=document.querySelector(".titluProduse");
            var str1="";
            str1=`<span class="capTabel">Denumire</span>
            <span class="capTabel">Descriere</span>
            <span class="capTabel1">Pret</span>
            <span class="capTabel1">Stoc</span>`;
            
			for(i in produse){ 
                    str+=`<tr>
                    <td><span ><img class="imagine" src="${produse[i].imagine}" alt="nu gasesc imaginea"></span></td>
                    <td><div class="proprietati">${produse[i].denumire}</div></td>
                    <td><div class="proprietati">${produse[i].descriere}</div></td>
                    <td><div class="proprietati">${produse[i].pret} lei </div></td>
                    <td><div class="proprietati">${produse[i].stoc} buc</div></td>
                    <td><a href="modificaprodus.html?id=${i}">
                    <input class="butonModifica" type="button" value="Modifica"/></a></td>
                    <td><a href="stergeprodus.html?id=${i}&nume=${produse[i].denumire}">
                    <input class="butonSterge" type="button" value="Sterge"/></a></td>
                </tr>`;}
 
            tabel1.innerHTML=str1;	
            tabel.innerHTML=str;
            
		}