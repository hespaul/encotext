console.log("CARGADO");



function encriptar() {
  let texto = document.getElementById("texto").value;
  
  let textoCifrado = texto
    .replace(/e/gi, "xR3")
    .replace(/i/gi, "rDz")
    .replace(/a/gi, "Ke")
    .replace(/o/gi, "pwQs")
    .replace(/u/gi, "mTg");
  
    


  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
  }
       
  console.log(textoCifrado);
}



function desencriptar() {
  let texto = document.getElementById("texto").value;

  let textoCifrado = texto
    .replace(/xR3/gi, "e")
    .replace(/rDz/gi, "i")
    .replace(/Ke/gi, "a")
    .replace(/pwQs/gi, "o")
    .replace(/mTg/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
    }

  console.log(textoCifrado);
}
