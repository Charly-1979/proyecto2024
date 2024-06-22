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
    
   document.getElementById("t6").value;
   let encontrado = false;
    for(let i=0; i < registros.length; i++ ){
        if (i === "t6"){
            encontrado = true;
            break; // Salir del bucle una vez que se encuentre el registro
        }
        if (encontrado){
                alert("registro encontrado"); 
            }else{
                alert("no se encontro registro");
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