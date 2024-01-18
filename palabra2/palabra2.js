//Separar por palabras y mostrar cuantas palabras tiene la siguie
//En base al resultado del ejercicio anterior agrupar en un array únicamente las palabras que tengan mas de 3 letras.
let phrase = 'La programación web es fundamental para el progreso'
let palabras= phrase.split (' ');
let numeroPalabras= palabras.length;
alert("la frase tiene " + numeroPalabras + "palabras.");
let largopalabra = palabras.filter (frase=> frase.length>3);
alert("palabras con mas de 3 letras: " + largopalabra.join(', '));