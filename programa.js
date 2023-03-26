let botonAlmacenar=document.getElementById("btnAlmacenar");
botonAlmacenar .addEventListener('click',()=>{

    sessionStorage . setItem('nombre','denian'); 
    sessionStorage . setItem('apellido','merchan');
    localStorage .setItem('nombre','denian'); 
    localStorage .setItem('apellido','merchan');
})
let botonBorrar=document .getElementById("btnBorrar");
botonBorrar .addEventListener('click',function(){
    sessionStorage.clear();
    localStorage .clear();
})
function construirfilas(){ 
    let fuentes= [localStorage, sessionStorage];
for(let k=0; k<fuentes.length;k++){
    let mifuente=fuentes[k];
    for(let i=0;i<mifuente. length;i++){
    let cuerpotabla=document.getElementById("cuerpotabla");
    let fila=document.createElement("tr");
    let celda=document .createElement("td");
     let texto=document.createTextNode(mifuente.key(i));
     celda.appendChild(texto);
    
     fila. appendChild(celda);
     celda=document.createElement("td");
     let valor=mifuente.getItem(mifuente.key(i)); 
     texto =document.createTextNode(valor);
     celda.appendChild(texto);
     fila.appendChild(celda);
      cuerpotabla .appendChild(fila);
    }
}
}
construirfilas ()