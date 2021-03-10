// fichier fonctions de la pizzeria
// fait par Heri Ezekiya && Nunsseu Elise Man


// 1.  verifierNumeroDeTelephone(numero)
console.log("================================================");
console.log("================================================");
 
function verifierNumeroDeTelephone (numero)
{

  if(numero.match(/^\d+$/) && (numero.length ==9)){
    console.log("Résultat optenu : Vrai")
  
  }else{
    console.log("Résultat optenu : Faut")
  }
  
}


console.log("1.  verifierNumeroDeTelephone(numero)")
console.log("================================================");
verifierNumeroDeTelephone(numero="923334444");
console.log("Entrée: " + numero);
console.log(("Resultat attendue: " + "vrai"));
console.log( "Nb des caracteres: " + numero.length) ;

console.log("================================================");
console.log("================================================");



// 2.  verifierEntier(entier)

function verifierEntier (entier)
{

  if(entier.match(/^-{0,1}\d+$/)){
    console.log("Résultat optenu : Vrai")
  
  }else{
    console.log("Résultat optenu : Faut")
  }
}


console.log("2. VerifierEntier(entier)")
verifierEntier(entier="-444");
console.log("Entrée: " + entier);
console.log(("Resultat attendue: " + "Vrai"));

console.log("================================================");
console.log("================================================");


//3. verifierCodePostal(codePostal)
console.log("3. verifierCodePostal(codePostal)")

function verifierCodePostal(codePostal)
{

 regexp = /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}?$/
  
        if (regexp.test(codePostal))
          {
            return "Résultat obtenu: vrai";
          }
        else
          {
            return "Résultat obtenu: Faut";
          }
}

console.log(verifierCodePostal(codePostal="j24s4c9"));
console.log(("Entrée: " + codePostal));
console.log(("Resultat attendue: " + "Faut"));