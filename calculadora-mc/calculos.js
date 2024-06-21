document.getElementById('t3').disabled = true; // Desactivar el campo t3
document.getElementById('t4').disabled = true; // Desactivar el campo t4
document.getElementById('boton1').addEventListener('click',function calcu() {
    
    var peso=parseInt(document.getElementById('t1').value);
    var altura=parseFloat(document.getElementById('t2').value);
    var resultado=parseInt(document.getElementById('t4').value);
    var altura2=(altura**2);
    var imc=(peso/altura2).toFixed(2);
    
    
    if (imc <= 18.5 ){
        document.getElementById('t3').value = imc;
        document.getElementById('t4').value = 'BAJO DE PESO';
    }else if (imc > 18.5 && imc < 25){
        document.getElementById('t3').value = imc;
        document.getElementById('t4').value = 'PESO NORMAL';
    }else if (imc >24.99 && imc < 30){
        document.getElementById('t3').value = imc;
        document.getElementById('t4').value = 'SOBREPESO';
    }else if (imc > 29.90 && imc < 40){
        document.getElementById('t3').value = imc;
        document.getElementById('t4').value = 'OBESIDAD';
    }else{
        document.getElementById('t3').value = imc;
        document.getElementById('t4').value = 'OBESIDAD EXTREMA';
    }
})
    

document.getElementById('boton2').addEventListener('click',function calcu3() {
    document.getElementById('t1').value="";
   document.getElementById('t2').value="";
   document.getElementById('t3').value="";
   document.getElementById('t4').value="";
})