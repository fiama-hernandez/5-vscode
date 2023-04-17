//variable/
let figura = prompt("INGRESE UN DIGITO TRIANGULO = 1 RECTANGULO = 2 CUADRADO 3 circulo =4 ")
let base;
let altura;
 let area;
 let perimetroa; 
 let perimetrob; let perimetroc;
 let perimetrototal;
 let radio; 
     const pi =3.14
 

switch (figura) {                                     
case "1": 
base = parseInt (prompt("ingresa la base del triangulo"));
altura = parseInt( prompt ("ingresar altura del trinagulo: "));
area = ((base*altura)/2);

perimetroa = parseInt( prompt("ingrese el perimetro A:")); 