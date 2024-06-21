//se desactivan las casillas t3 y t4 que es donde se mostraran los resultados//
document.getElementById('t4').disabled = true; // Desactivar el campo t4//

//se declara la funcion//
document.getElementById('boton1').addEventListener('click',function calcu() {
       
    //se asignan variables a casilla peso, altura, edad y tmb//
        var peso=parseInt(document.getElementById('t1').value);
        var altura=parseInt(document.getElementById('t2').value);
        var edad=parseInt(document.getElementById('d3').value);
        var tmb=parseInt(document.getElementById('t4').value);
    //se aplica la formula para obtener el TMB TMB=(10Xpeso(kg))+(6.25 Xaltura(cm))-(5 X edad(años))+5//
    //se declaran variables para calculos//
        var calcu1=(10*peso);  
        var calcu2=(6.25*altura);
        var calcu3=(5*edad);
        var tmb=((calcu1+calcu2)-(calcu3)+5).toFixed(0);
        var tmb1=((calcu1+calcu2)-(calcu3)-161).toFixed(0);
       // document.getElementById('t4').value =(tmb + " calorias diarias");//

    //bloque asignado el 9 de junio//
    //obtener el valor del checkbox//
    var hombreCheckbox = document.getElementById("cas1");
    var esHombre = hombreCheckbox.checked;
    var mujerCheckbox = document.getElementById("cas2");
    var esMujer = mujerCheckbox.checked;
    //obtener el valor del select//
    var actividadSelect = document.querySelector('select[name="ACTIVIDAD"]');
    var nivelActividad = actividadSelect.value;

    if (esHombre && nivelActividad==="0"){
        var tmb2=((tmb*1.2).toFixed(0));
         document.getElementById('t4').value =(tmb2 + " calorias diarias");
    }else if (esHombre && nivelActividad==="1"){
        var tmb2=((tmb*1.375).toFixed(0));
         document.getElementById('t4').value =(tmb2 + " calorias diarias");
    }else if (esHombre && nivelActividad==="2"){
        var tmb2=((tmb*1.55).toFixed(0));
         document.getElementById('t4').value =(tmb2 + " calorias diarias");
    }else if (esHombre && nivelActividad==="3"){
        var tmb2=((tmb*1.725).toFixed(0));
         document.getElementById('t4').value =(tmb2 + " calorias diarias");
    }else if (esHombre && nivelActividad==="4"){
        var tmb2=((tmb*1.9).toFixed(0));
         document.getElementById('t4').value =(tmb2 + " calorias diarias");
    }else if (esMujer && nivelActividad==="0"){
        var tmb2=((tmb1*1.2).toFixed(0));
        document.getElementById('t4').value =(tmb2 + " calorias diarias");
    }else if (esMujer && nivelActividad==="1"){
        var tmb2=((tmb1*1.375).toFixed(0));
        document.getElementById('t4').value =(tmb2 + " calorias diarias");
    }else if (esMujer && nivelActividad==="2"){
        var tmb2=((tmb1*1.55).toFixed(0));
        document.getElementById('t4').value =(tmb2 + " calorias diarias");
    }else if (esMujer && nivelActividad==="3"){
        var tmb2=((tmb1*1.725).toFixed(0));
        document.getElementById('t4').value =(tmb2 + " calorias diarias");
    }else if (esMujer && nivelActividad==="4"){
        var tmb2=((tmb1*1.9).toFixed(0));
        document.getElementById('t4').value =(tmb2 + " calorias diarias");
        
    }else{
        alert("datos incorrectos");
    }
    
})  


document.getElementById('boton2').addEventListener('click',function calcu2() {
   document.getElementById('t1').value="";
   document.getElementById('t2').value="";
   document.getElementById('t4').value="";
   document.getElementById('d3').value="";
   document.getElementById('cas1').checked=false;
   document.getElementById('cas2').checked=false;

})
