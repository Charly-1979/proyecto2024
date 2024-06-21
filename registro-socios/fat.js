
alert(        "!ATENCION¡ \n ELIGE UN AVATAR DE ACUERDO A TU SEXO.\nLa eleccion de avatar y la informacion\n deben de ser correctos. o tus resultados seran erroneos");

document.getElementById('t6').disabled = true;
var funcionActivada=false;


function activarEnlacefat() {
  alert("gracias por elegir avatar llena el formulario para tus resultados")
  document.getElementById('t5').style.display="none";
  document.getElementById('imella').style.display="none"; 
  document.getElementById('imel').style.display="none";
  document.getElementById('imel2').style.display="block";  
  funcionActivada=true;
}
function activarEnlacefat2() {
  alert("gracias por elegir avatar llena el formulario para tus resultados")
  document.getElementById('t5').style.display="block";
  document.getElementById('imel').style.display="none";  
  document.getElementById('imella').style.display="none";
  document.getElementById('imella2').style.display="block";
}


 
document.getElementById('boto1').addEventListener('click', function grasac() {
  if (funcionActivada===true){  
    //se asignan variables a casilla peso, altura, edad y tmb para recibir valores//
    var nombre = document.getElementById('t1').value;
    var cintura = parseFloat(document.getElementById('t2').value);
    var cuello = parseFloat(document.getElementById('t3').value);
    var altura = parseFloat(document.getElementById('t4').value);
    var cadera = parseFloat(document.getElementById('t5').value);
    var resultado = parseFloat(document.getElementById('t6').value);
    //se aplica la formula para la grasa corporal//
    //hombres Grasa corporal(%)=86.010xlog 10 (cintura-cuello)-70.041xlog 10 (altura)+36.76//
    //mujeres Grasa corporal(%)=163.205xlog10(cintura+caderas-cuello)-97.684xlog10(altura)-78.387//
     var calcu1 = cintura - cuello;
        var calcu2 = Math.log10(calcu1);
        var calcu3 = 0.19077 * calcu2;
        var calcu4 = 1.0324 - calcu3;
        var algtura = Math.log10(altura);
        var calcu5 = 0.15456 * algtura;
        var resu1 = calcu4 + calcu5; //completo1
        var resu2 = ((495 / resu1) - 450).toFixed(2); //resultado final//   
       document.getElementById('t6').value =" HOLA "  + nombre + " ,TU PORCENTAJE DE GRASA CORPORAL ES DE  " + resu2;
       
  }else{
    //se asignan variables a casilla peso, altura, edad, cadera y tmb para recibir valores//
    var nombre = document.getElementById('t1').value;
    var cintura = parseFloat(document.getElementById('t2').value);
    var cuello = parseFloat(document.getElementById('t3').value);
    var altura = parseFloat(document.getElementById('t4').value);
    var cadera = parseFloat(document.getElementById('t5').value);
    var resultado = parseFloat(document.getElementById('t6').value);
    //se aplica la formula para la grasa corporal//
    //hombres Grasa corporal(%)=86.010xlog 10 (cintura-cuello)-70.041xlog 10 (altura)+36.76//
    //mujeres Grasa corporal(%)=163.205xlog10(cintura+caderas-cuello)-97.684xlog10(altura)-78.387//
        var calcu1 = cintura + cadera - cuello; //sacamos resultado de cintura+cadera-cuello//
        var calcu2 = Math.log10(calcu1); //sacamos el logaritmo base 10 de cintura+cadera-cuello// 
        var calcu3 = 0.35004 * calcu2;  //en la formula seria 0.35004xlog10(cintuta+cadera-cuello)//
        var calcu4 = 1.29579 - calcu3; // en la formula seria  1.29579-0.35004xlog10(cintura+cadera-cuello)//
        var algtura = Math.log10(altura); //sacamos el logaritmo base 10 de la altura//
        var calcu5 = 0.22100 * algtura; // en la formula seria 0.22100xlog10(altura)//
        var resu1 = calcu4 + calcu5; //completo1 //en la formula seria 1.29579-0.35004xlog10(cintura+cadera-cuello)+0.22100xlog10(altura)//
        var resu2 = ((495 / resu1) - 450).toFixed(2); //resultado final = PGC= (495/ 1.29579-0.35004xlog10(cintura+cadera-cuello)+0.22100xlog10(altura))-450//
        document.getElementById('t6').value ="HOLA " + nombre +  ",TU PORCENTAJE DE GRASA CORPORAL ES  " + resu2;
            
  }
  
})

function activarEnlacefat3() {
   document.getElementById('imella2').style.display="none";
   document.getElementById('imel2').style.display="none";
   document.getElementById('t5').style.display="block";
   document.getElementById('t1').value="";
   document.getElementById('t2').value="";
   document.getElementById('t3').value="";
   document.getElementById('t4').value="";
   document.getElementById('t5').value="";
   document.getElementById('t6').value="";
   document.getElementById('imella').style.display="block";
   document.getElementById('imel').style.display="block";
   
}








/*
//obtener los valores de los checkbox//
    var hombreCheckbox = document.getElementById("cas1"); 
    var esHombre = hombreCheckbox.checked;
    var mujerCheckbox = document.getElementById("cas2");
    var esMujer = mujerCheckbox.checked;
    
    if (esHombre){
        var calcu1 = cintura - cuello;
        var calcu2 = Math.log10(calcu1);
        var calcu3 = 0.19077 * calcu2;
        var calcu4 = 1.0324 - calcu3;
        var algtura = Math.log10(altura);
        var calcu5 = 0.15456 * algtura;
        var resu1 = calcu4 + calcu5; //completo1
        var resu2 = ((495 / resu1) - 450).toFixed(2); //resultado final//   
        document.getElementById('t4').value ="hola" + nombre + ",tu % de grasa corporal es" + resu2;
    
    }else if (esMujer){
        var calcu1 = cintura + cadera - cuello; //sacamos resultado de cintura+cadera-cuello//
        var calcu2 = Math.log10(calcu1); //sacamos el logaritmo base 10 de cintura+cadera-cuello// 
        var calcu3 = 0.35004 * calcu2;  //en la formula seria 0.35004xlog10(cintuta+cadera-cuello)//
        var calcu4 = 1.29579 - calcu3; // en la formula seria  1.29579-0.35004xlog10(cintura+cadera-cuello)//
        var algtura = Math.log10(altura); //sacamos el logaritmo base 10 de la altura//
        var calcu5 = 0.22100 * algtura; // en la formula seria 0.22100xlog10(altura)//
        var resu1 = calcu4 + calcu5; //completo1 //en la formula seria 1.29579-0.35004xlog10(cintura+cadera-cuello)+0.22100xlog10(altura)//
        var resu2 = ((495 / resu1) - 450).toFixed(2); //resultado final = PGC= (495/ 1.29579-0.35004xlog10(cintura+cadera-cuello)+0.22100xlog10(altura))-450//
        document.getElementById('t4').value ="hola" + nombre + ",tu % de grasa corporal es" + resu2;
            
    }else{
        alert("opcion incorrecta");
    }
      

});
*/