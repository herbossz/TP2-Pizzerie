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

// 2.  verifierEntier(entier)

function verifierEntier (entier)
{

  if(entier.match(/^-{0,1}\d+$/)){
    console.log("Résultat optenu : Vrai")
  
  }else{
    console.log("Résultat optenu : Faut")
  }
}

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

