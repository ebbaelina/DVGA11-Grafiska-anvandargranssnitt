//Ebba Johansson & Albin Österlund
'use strict'; 

window.addEventListener('load', init);

function init() {
    console.log('init anropad');

    const cols = document.querySelectorAll('[class^="col"]');
    cols.forEach(col => {
        col.addEventListener('click', tablebooking);
    });

    document.querySelector('button').addEventListener('click', waitinglist);
}

function tablebooking(e){
    console.log('tablebooking anropad');
    const target = e.currentTarget;

    const computedStyle = window.getComputedStyle(target);
    const backgroundColor = computedStyle.backgroundColor;
    console.log(backgroundColor);
    //om grön
    if (backgroundColor === "rgb(0, 128, 0)") {
        target.style.backgroundColor = "red";
      }
      //om röd  
      if (backgroundColor === "rgb(255, 0, 0)") {

        if(confirm("Vill du avboka bordet?") == true){
         target.style.backgroundColor = "green";    
        }
      }
  
}

function waitinglist(e){
    console.log('waitingList anropad');
    e.preventDefault(); 
    
    let namn = document.getElementById("namn").value;
    let antal = document.getElementById("antal").value;
    let lista = document.getElementById("lista");

    let tdNamn = document.createElement('td');
    let tdLista = document.createElement('td');
    let tr = document.createElement('tr');

    let textNamn = document.createTextNode(namn); 
    let textLista = document.createTextNode(antal); 

    tdNamn.appendChild(textNamn);
    tdLista.appendChild(textLista);

    tr.appendChild(tdNamn);
    tr.appendChild(tdLista); 

    lista.appendChild(tr); 
}

document.getElementById("lista").addEventListener("click", function(e) {
    console.log("klick på lista"); 
    if (e.target && e.target.nodeName == 'TD') {
        if(confirm("Vill du ta bort bokningen från kön?") == true){
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);    
           }
        
    }
});
