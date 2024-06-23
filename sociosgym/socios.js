const registros=[];

function guardarRegistros(){
   let id=(document.getElementById("t1").value);
   let nombre=document.getElementById("t2").value;
   let edad=document.getElementById("t3").value;
   let direccion=document.getElementById("t4").value;
   let email=document.getElementById("t5").value;
     let persona1={
        id:id,
        nombre:nombre,
        edad:edad,
        direccion:direccion,
        email:email

     };
    registros.push(persona1);
}
function mostrarRegistros(){
    console.log(registros);
}
function buscarRegistros(){
   encontrado=false;
   let id1=(document.getElementById("t6").value);
    alert("inicia el ciclo");
      for(let i=0; i < registros.length; i++){
        
        if (registros[i].id === id1) { // Compara con id1
            encontrado = true;
            alert("Registro encontrado");
            let registro=registros[i];
            alert("ID: " + registro.id + ", Nombre: " + registro.nombre + ", Edad: " + registro.edad + ", Dirección: " + registro.direccion + ", Email: " + registro.email);
            break;
        
      }else{
           alert("registro no encontrado");
           break
      }
    }
}
          

       
  

function limpiar(){
    document.getElementById("t1").value="";
    document.getElementById("t2").value="";
    document.getElementById("t3").value="";
    document.getElementById("t4").value="";
    document.getElementById("t5").value="";
}