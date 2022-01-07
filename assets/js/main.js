// al click devo recuperare i dati
// recupero i dati
function controllaInvia(){
    // controllare se ci sono rimasti dei campi 
    //obbligatori vuori
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const indirizzo = document.getElementById("indirizzo").value;
    const citta = document.getElementById("citta").value;
    const cap = document.getElementById("cap").value;

    if (nome == "" || undefined || null) {
        document.getElementById("nome").style.outline = " 2px solid red" ;
        document.getElementById("nome").style.border = " none ";
        // emettere avviso in alto del campo mancante

        }

    if (cognome == "" || undefined || null){
        document.getElementById("cognome").style.outline = " 2px solid red" ;
        document.getElementById("cognome").style.border = " none ";
     }   

     if (indirizzo == "" || undefined || null){
        document.getElementById("indirizzo").style.outline = " 2px solid red" ;
        document.getElementById("indirizzo").style.border = " none ";
     } 

     if (citta == "" || undefined || null){
        document.getElementById("citta").style.outline = " 2px solid red" ;
        document.getElementById("citta").style.border = " none ";
     } 

    
}
