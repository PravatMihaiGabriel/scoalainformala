      var produse;

      var cos=[];
      if(localStorage.cos!==undefined){
                cos=JSON.parse(localStorage.cos);}

            var PRODUSE_SERVER_URL = "https://produse-cae5b.firebaseio.com/.json";

            var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					produse = JSON.parse(this.responseText);
					
					deseneazaProduse();
				}
			};
			xhttp.open("GET", PRODUSE_SERVER_URL, true);
			xhttp.send();
		
      function deseneazaProduse() {
        var element=document.getElementById("imagineLoading");
            element.classList.remove("imagineLoading");
            element.classList.add("ascundeImagine");
                       
            var tabel=document.querySelector("#produse");
			var str="";
            
			for(i in produse){
                    str+=`<div class="principal">
      <div class="poza" style="background-image: url(${produse[i].imagine})">
      </div>
      <div class="denumire">${produse[i].denumire}</div>
      <div class="pretSiButon"><span class="pret">${produse[i].pret}lei</span>
     <input  class="butonDetalii" type="button" value="DETALII" onclick="detalii('${i}');"/>
    </div>
  </div>`;}
            produseInCos();	
			tabel.innerHTML=str;  
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
      <div class="pozaDetalii" style="background-image: url(${produse[i].imagine})">
      </div>
      <div class="denumirePretCantitate">
      <div class="denumireDetalii">${produse[i].denumire}</div>
      </br>
      <div class="descriere">${produse[i].descriere}</div>
      </br>
      <div>Pret: ${produse[i].pret} lei</div>
      </br>
      <div class="cantitate">In stoc: ${produse[i].stoc} buc</div>
      </br>
      <div>
      <span>Cantitate: </span> 
      <input value="1" min="1" class="detaliiCantitate" type="number"/>
      </div>
      </br>
      <input class="adaugaInCos" type="button" value="Adauga in Cos" onclick="adaugaInCos('${i}');"/>
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
            var codProdus=produse[index].cod;
            var cantitateNoua=parseInt(document.querySelector(".detaliiCantitate").value);
            var produsNou={ cod: produse[index].cod, imagine: produse[index].imagine, denumire: produse[index].denumire, pret: produse[index].pret, cantitate: cantitateNoua,
             descriere: produse[index].descriere, stoc: produse[index].stoc}; 

            
                var pozitie=false;
                for (i=0; i<cos.length;i++){
                
                if (codProdus===cos[i].cod){
                    pozitie=i;
                    if((cos[pozitie].cantitate+cantitateNoua)>produse[index].stoc){ 
                        tabel1.classList.remove("stocInsuficientInvizibil");
                tabel1.classList.add("stocInsuficientVizibil");
                setTimeout(function(){tabel1.classList.remove("stocInsuficientVizibil")},2000);
                tabel1.classList.add("stocInsuficientInvizibil");

                }
                else{ cos[pozitie].cantitate=cos[pozitie].cantitate+cantitateNoua;
                    str=`Prosusul ${produse[i].denumire} a fost adaugat in cos`;
                    
                    tabel.innerHTML=str;
                    tabel.classList.remove("produsInCosInvizibil");
                tabel.classList.add("produsInCosVizibil");
                setTimeout(function(){tabel.classList.remove("produsInCosVizibil")},2000);
                tabel.classList.add("produsInCosInvizibil");
                produseInCos();
            } 
                }
            }
                if(pozitie===false){
             if (produsNou.cantitate>produse[index].stoc){
                 tabel1.classList.remove("stocInsuficientInvizibil");
                tabel1.classList.add("stocInsuficientVizibil");
                setTimeout(function(){tabel1.classList.remove("stocInsuficientVizibil")},2000);
                tabel1.classList.add("stocInsuficientInvizibil");
            }
                else{cos.push(produsNou);
                    
                    str=`Produsul ${produse[index].denumire} a fost adaugat in cos`;
                    tabel.innerHTML=str;
                tabel.classList.remove("produsInCosInvizibil");
                tabel.classList.add("produsInCosVizibil");
                setTimeout(function(){tabel.classList.remove("produsInCosVizibil")},2000);
                tabel.classList.add("produsInCosInvizibil");
                produseInCos();
            }
            }
            
            inchideDetalii();
            localStorage.cos=JSON.stringify(cos);


        }

        function inchideDetalii(){
            var tabel=document.querySelector("#detalii");
            tabel.classList.remove("detaliiVizibile");
            tabel.classList.add("detaliiInvizibile");

        }
        
        function produseInCos() {
            var prodInCos=0;
            var tabel=document.querySelector(".aButonCos");
            var str="";
            for(i in cos){ prodInCos=prodInCos+1;
            }
            if (prodInCos>0) {str=`<input  class="butonCos" type="button" value="Cos Cumparaturi (${prodInCos})"/>`
            tabel.innerHTML=str;}
        }