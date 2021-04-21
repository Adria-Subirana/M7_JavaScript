// exercici 1
function ex1() {
  let nom = window.prompt("Digues el teu nom:").toUpperCase();
  let arrayNom = Array.from(nom);

  for (let i = 0; i < arrayNom.length; i++) {
    console.log(arrayNom[i]);
  }
}

// exercici 2
function ex2() {
  let nom = window.prompt("Digues el teu nom:").toUpperCase();
  let arrayNom = Array.from(nom);

  for (let i = 0; i < arrayNom.length; i++) {
    if (
      arrayNom[i] == "A" ||
      arrayNom[i] == "E" ||
      arrayNom[i] == "I" ||
      arrayNom[i] == "O" ||
      arrayNom[i] == "U"
    ) {
      console.log("He trobat una vocal: " + arrayNom[i]);
    } else if (arrayNom[i].toUpperCase() == arrayNom[i].toLowerCase()) {
      console.log("Els noms de persones no contenen el número: " + arrayNom[i]);
    } else {
      console.log("He trobat una consonant: " + arrayNom[i]);
    }
  }
}

// exercici 3
function ex3() {
  // creem array a partir de prompt (string),
  // ordenem alfabèticament
  let arrayOrd = Array.from(
    window.prompt("Digues el teu nom:").toUpperCase()
  ).sort();
  // assignem valor 1 com a base
  let tempValor = 1;
  // creem el nou Map
  let lletresMap = new Map();

  // loop per a comparar les lletres entre sí
  for (let i = 0; i < arrayOrd.length; i++) {
    // si la posició i i la posició i+1 dins de l'array són iguals, sumem +1 al tempValor
    if (arrayOrd[i] == arrayOrd[i + 1]) {
      tempValor += 1;
    } else {
      // si la posició i i la posició i+1 no coincideixen, fem un set amb la lletra i el valor final (repeticions)
      let tempLletra = arrayOrd[i];
      lletresMap.set(tempLletra, tempValor);
      // tornem al valor inicial d'1 per a ressetejar el comptador
      tempValor = 1;
    }
  }
  //fem un log de l'objecte Map
  console.log(lletresMap);

  /*let nom = window.prompt("Digues el teu nom:").toUpperCase();
  let arrayOrd = Array.from(nom).sort();
  let tempValor = 1;
  let tempLletra;
  let previ = new Map();
  let resultat = arrayOrd.map(ordena);
  console.log(resultat);

  function ordena() {
    for (let i = 0; i < arrayOrd.length; i++) {
      if (arrayOrd[i] == arrayOrd[i + 1]) {
        tempValor += 1;
      } else {
        tempLletra = arrayOrd[i];
        previ.set(tempLletra, tempValor);
        tempValor = 1;
      }
    }
    return previ;
  }*/

  /*let array3 = ["A", "L", "E", "J", "A", "N", "D", "R", "O"];
  let letras = {};
  array3.map(function (i) {
    letras[i] = (letras[i] || 0) + 1;
  });

  console.log(letras);*/
}

// exercici 4
function ex4() {
  let nom = window.prompt("Digues el teu nom:").toUpperCase();
  let arrayNom = Array.from(nom);
  let cognom = window.prompt("Digues el teu cognom:").toUpperCase();
  let arrayCognom = Array.from(cognom);

  let complert = arrayNom.concat(" ", arrayCognom);

  console.log(complert);
}

// nivell 2
function niv2() {
  const str =
    "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";
  const regExp = /[A-Zñ0-9._%+-]+@[A-Zñ0-9.-]+\.[A-Z]{2,}/gi;

  let filterMails = [...new Set(str.match(regExp))];
  console.log(filterMails);
}
