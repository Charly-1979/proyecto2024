const registros=[];

function guardarRegistros(){
   let id=document.getElementById("t1").value;
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
   
   let id1=parseInt(document.getElementById("t6").value);
    alert("inicia el ciclo");
      for(let i=0; i < registros.length; i++){
        alert("se recorrio el for");
       if( i===id1){
           alert("registro encontrado");
           break;
       }else{
           alert("registro no encontrado");
          
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