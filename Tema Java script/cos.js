      var cos=JSON.parse(localStorage.cos);
      var produse;
            var PRODUSE_SERVER_URL = "https://produse-cae5b.firebaseio.com/.json";

            var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					produse = JSON.parse(this.responseText);
					deseneazaCos();
				}
			};
			xhttp.open("GET", PRODUSE_SERVER_URL, true);
			xhttp.send();
		
      function deseneazaCos() { 
            var element=document.getElementById("imagineLoading");
            element.classList.remove("imagineLoading");
            element.classList.add("ascundeImagine");           
            var tabel=document.querySelector("#cos");
            var str="";
            var tabel1=document.querySelector("#zonaTotal");
            var str1="";
            var tabel2=document.querySelector("#cosGol");
            var str2="";
            var pretTotalNet=0;
            var pretTotal=0;
            var tva=0;
            var produseInCos=0;
            
            if(cos.length>0){
                str=str+`</br>
                <div class="gridCosTitlu">
      <span class="denumireCos" >Denumire</span>
      <span class="denumireCos">Pret (lei)</span>
      <span class="denumireCos">Cantitate</span>
      <span class="denumireCos">Pret Total (lei)</span>
      </div>
      </br>`;
            } else {str2=`<h1 class>Cosul este gol</h1>`
                    tabel.classList.remove("cos");
                    tabel.classList.add("cosGol");
                    tabel1.classList.remove("zonaTotal");
                    tabel1.classList.add("zonaTotalGol");}

			for(i in cos){ produseInCos=produseInCos+1;
                pretTotal=pretTotal+(cos[i].pret*cos[i].cantitate);
                    str+=`</br>
                    <div class="gridCos">
      <a href="#" class="denumireProdusCos">
      <span onclick="detalii(${i});">${cos[i].denumire}</span></a>
      <span>${cos[i].pret} lei</span>
      <div class="denumireCos"><input  class="inchideDetalii1" type="button" value="-" onclick="scade(${i});"/></div>
      <span class="denumireCos">${cos[i].cantitate}</span>
      <div class="denumireCos"><input  class="inchideDetalii1" type="button" value="+" onclick="adauga(${i});"/></div>
      <span class="denumireCos">${(cos[i].pret*cos[i].cantitate)} lei</span>
      <input  class="butonDetalii" type="button" value="STERGE" onclick="remove(${i});"/>
      </div>
      </br>`
     ;}
         if(produseInCos>0) {
              
             pretTotalNet=pretTotal/1.19;
             tva=pretTotal-pretTotalNet;
             if (produseInCos>1){  str1=`<div class="detaliiZonaTotal">${produseInCos} Produse</div>`;

             } else { str1=`<div class="detaliiZonaTotal">${produseInCos} Produs</div>`;
             }
         str1=str1+`<div class="detaliiZonaTotal">Pret (fara TVA): ${pretTotalNet.toFixed(2)} lei</div>
         <div class="detaliiZonaTotal">TVA: ${tva.toFixed(2)} lei</div>
         <div class="detaliiZonaTotal">Pret Total: ${pretTotal.toFixed(2)} lei</div>
         <input  class="butonDetalii1" type="button" value="CUMPARA" onclick="cumpara();"/>
         </br>
        </br>`    
        }
        tabel.innerHTML=str;
        tabel1.innerHTML=str1;
        if(str2.length>0){
        tabel2.innerHTML=str2;
        setTimeout(function(){window.location="Magazinuldediverse.html"},1000);
        }
      }

      function detalii(i){
            var tabel=document.querySelector("#detalii");
            tabel.classList.remove("detaliiInvizibile");
            tabel.classList.add("detaliiVizibile");
			var str="";
            str+=`
      <div id="fereastraDetalii1">
      <input class="inchideDetalii" type="button" value="X" onclick="inchideDetalii();"/>
      <div id="fereastraDetalii">
      <div class="pozaDetalii" style="background-image: url(${cos[i].imagine})">
      </div>
      <div class="denumirePretCantitate">
      <div class="denumireDetalii">${cos[i].denumire}</div>
      </br>
      <div class="descriere">${cos[i].descriere}</div>
      </br>
      <div>Pret: ${cos[i].pret} lei</div>
      </br>
      <div class="cantitate">In stoc: ${cos[i].stoc} buc</div>
      </br>
      <div>
      <span>Cantitate: </span> 
      <input value="1" min="1" class="detaliiCantitate" type="number"/>
      </div>
      </br>
      <input class="adaugaInCos" type="button" value="Adauga in Cos" onclick="adaugaInCos(${i});"/>
      </div>
    </div>
  </div>`	
            tabel.innerHTML=str;  
        }

        function adaugaInCos(index){
            if(localStorage.cos!==undefined){
                cos=JSON.parse(localStorage.cos);
            }
            var tabel=document.querySelector("#produsInCos");
            var tabel1=document.querySelector("#stocInsuficient");
            var codProdus=cos[index].cod;
            var cantitateNoua=parseInt(document.querySelector(".detaliiCantitate").value);
            var produsNou={ cod: cos[index].cod, imagine: cos[index].imagine, denumire: cos[index].denumire, pret: cos[index].pret, cantitate: cantitateNoua,
             descriere: produse[index].descriere, stoc: produse[index].stoc}; 
                var pozitie=false;
                for (i=0; i<cos.length;i++){
                if (codProdus===cos[i].cod){
                    pozitie=i;
                    if((cos[pozitie].cantitate+cantitateNoua)>cos[index].stoc){ 
                        tabel1.classList.remove("stocInsuficientInvizibil");
                tabel1.classList.add("stocInsuficientVizibil");
                setTimeout(function(){tabel1.classList.remove("stocInsuficientVizibil")},2000);
                tabel1.classList.add("stocInsuficientInvizibil");
                }
                else{ cos[pozitie].cantitate=cos[pozitie].cantitate+cantitateNoua;
                    str=`Prosusul ${cos[i].denumire} a fost adaugat in cos`;
                    tabel.innerHTML=str;
                    tabel.classList.remove("produsInCosInvizibil");
                tabel.classList.add("produsInCosVizibil");
                setTimeout(function(){tabel.classList.remove("produsInCosVizibil")},2000);
                tabel.classList.add("produsInCosInvizibil");
            } 
                }
            }
            
            inchideDetalii();
            deseneazaCos();
            localStorage.cos=JSON.stringify(cos);
        }

        function inchideDetalii(){
            var tabel=document.querySelector("#detalii");
            tabel.classList.remove("detaliiVizibile");
            tabel.classList.add("detaliiInvizibile");
        }

        function scade(index){
            if(cos[index].cantitate>1){
            cos[index].cantitate=cos[index].cantitate-1;
            localStorage.cos=JSON.stringify(cos);}
            deseneazaCos();
        }

        function adauga(index){
            if(cos[index].cantitate<cos[index].stoc){
            cos[index].cantitate=cos[index].cantitate+1;
            localStorage.cos=JSON.stringify(cos);}
            deseneazaCos();
        }

        function remove(index){
            cos.splice(index,1);
            localStorage.cos=JSON.stringify(cos);
            deseneazaCos();
        }

        function cumpara() {
            for (i in cos) {
                 for(j in produse) {
                     if (cos.length>0){
                        if (cos[i].cod===produse[j].cod){
                         produse[j].stoc=produse[j].stoc-cos[i].cantitate;
                        }
                     }
                 }  
                }
                cos=[];
                localStorage.cos=JSON.stringify(cos);
                deseneazaCos(); 
                sendAsJson();
				}
			
        function sendAsJson(){
            var element=document.getElementById("imagineLoading");
            element.classList.remove("imagineLoading");
            element.classList.add("ascundeImagine");				
                var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
                      console.log(this.responseText);
					}
                };
				xhttp.open("PUT", PRODUSE_SERVER_URL, true);
				xhttp.send(JSON.stringify(produse));		
			}