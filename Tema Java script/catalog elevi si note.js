var listaElevi=[];
		
		function drawListaElevi(){
            document.getElementById("niciUnElev").style.display = "none";
            document.getElementById("macarUnElev").style.display = "flex";
			var tabel=document.querySelector("#listaElevi tbody");
			var str="";
            
			for(var i=0;i<listaElevi.length;i++){ 
                if (listaElevi[i].note.length>0){

				    str+= `<tr>
					<td>${listaElevi[i].numeElev}</td>
                    <td>${(listaElevi[i].suma/listaElevi[i].note.length).toFixed(2)}</td>
					<td><input style="margin-right: 40px; margin-left: 40px; color:black;
                    background-color: lightgrey; height: 25px;" type="button" value="Vezi notele" onclick="veziNotele(${i}, this, event)"/></td>
				</tr>`; } else {
                    str+= `<tr>
					<td>${listaElevi[i].numeElev}</td>
                    <td>${listaElevi[i].suma}</td>
					<td><input style="margin-right: 40px; margin-left: 40px; color:black;
                    background-color: lightgrey; height: 25px;" type="button" value="Vezi notele" onclick="veziNotele(${i}, this, event)"/></td>
				</tr>`;}
				
                
			}
			console.log(str);
			tabel.innerHTML=str;
		}

		
        function drawListaNote(){
            document.getElementById("nicioNota").style.display = "none";
            document.getElementById("macarONota").style.display = "flex";
			var tabel=document.querySelector("#listaNote tbody");
			var str="";
            console.log(listaElevi[indexElev].note.length);
            for(var i=0;i<listaElevi[indexElev].note.length;i++){
				    str+= `<tr>
					<td>${listaElevi[indexElev].note[i]}</td>
                    </tr>`;
				
                
			}
			console.log(str);
			tabel.innerHTML=str;
		}
		function sorteazaNote(i, element, eveniment){

            listaElevi[indexElev].note.sort(function(a, b)
                {
                     return a - b;
                });
           
			if (i==="desc"){
							listaElevi[indexElev].note.reverse();
            }
			
			drawListaNote();
           
		}
        
       
        function sorteazaMedii(i, element, eveniment){
            
            listaElevi.sort(function(a,b){
				if((a.suma/a.note.length)>(b.suma/b.note.length)){
					return 1;
				}else if((a.suma/a.note.length)<(b.suma/b.note.length)){
					return -1;
				}else{
					return 0;
				}
			});
           
                  
           if (i==="desc"){
                           listaElevi.reverse();

           }
           
           for(i in listaElevi.nume){if (listaElevi[i].nume===numeleElevului){
            indexElev=i;
            console.log(indexElev)}}
           
           drawListaElevi();
           drawListaNote();
       }



      function valideaza(element, eveniment) {
            eveniment.preventDefault();
            
            var elemNumeElev = document.getElementById("numeElev");
           
            var a=false;
            

            console.log(elemNumeElev.value);
            if (elemNumeElev.value.length<3){
                elemNumeElev.style.backgroundColor="red";
                var element=document.getElementById("numeElevGresit");
                element.classList.remove("corect");
                element.classList.add("gresit");
                }else { elemNumeElev.style.backgroundColor="";
                element=document.getElementById("numeElevGresit");
                element.classList.remove("gresit");
                element.classList.add("corect");
            a=true;};

           
            var elevNou={numeElev: elemNumeElev.value, suma: 0, note: [] };
            if(a===true){listaElevi.push(elevNou);
                             
                drawListaElevi();

                elemNumeElev.value="";
                }
            

            console.log(elemNumeElev.value);
            console.log(elevNou.suma.value);
            console.log(element, eveniment);
               
            
        }

        function valideazaNota(element, eveniment) {
            eveniment.preventDefault();
            
            var elemNota = document.getElementById("notaElev");
           
            var a=false;
            

            console.log(elemNota.value);
            if (parseInt(elemNota.value)<1 || parseInt(elemNota.value)>10){
                elemNota.style.backgroundColor="red";
                var element=document.getElementById("notaGresita");
                element.classList.remove("corect");
                element.classList.add("gresit");
            }else { elemNota.style.backgroundColor="";
                element=document.getElementById("notaGresita");
                element.classList.remove("gresit");
                element.classList.add("corect");
                a=true;};

           
                console.log(listaElevi[indexElev]);           
            if(a===true){
                listaElevi[indexElev].note.push(parseInt(elemNota.value));
                console.log(listaElevi[indexElev]);
                var sumaNote=listaElevi[indexElev].suma;
                sumaNote+=parseInt(elemNota.value);
                listaElevi[indexElev].suma=sumaNote;
                }
                console.log(listaElevi[indexElev].suma);            
                drawListaNote();
                drawListaElevi();

                elemNota.value="";
                }
            

        function validareElev(element,eveniment){
        var ultimatasta=eveniment.key;   
        var codTasta=eveniment.keyCode;


            if (ultimatasta.toLowerCase()>="a" && ultimatasta.toLowerCase()<="z" || ultimatasta===" " || ultimatasta==="-" || ultimatasta==="'") {
                         
            } else {
            eveniment.preventDefault();}

            if(codTasta===13){valideaza(element, eveniment);}       
            
        }
        
        function validareNota(element,eveniment){
        
        var ultimaTasta=eveniment.key;
        var codTasta=eveniment.keyCode;
                            

            if (ultimaTasta>="0" && ultimaTasta<="9") {
                                  
                } else {
                    
                eveniment.preventDefault();
                }
                if(codTasta===13){valideazaNota(element, eveniment);}  
            }
       
        function ascundeNotele(element,eveniment){
                var element=document.getElementById("fereastraNote");
                element.classList.remove("fereastraNoteVizibila");
                element.classList.add("fereastraNoteInvizibila");
  
            }

        var indexElev="";
        var numeleElevului="";
        function veziNotele(i, element, eveniment){
                var element=document.getElementById("fereastraNote");
                element.classList.remove("fereastraNoteInvizibila");
                element.classList.add("fereastraNoteVizibila");
                numeleElevului=listaElevi[i].numeElev;
                indexElev=i;
                var elevul=document.getElementById("noteleElevului");
                var sir=`<h2 align="left" id="noteleElevului">Note elev: ${numeleElevului}</h2>`;
                elevul.innerHTML=sir;
                drawListaNote();   
            }
        