function validarFormulario(){
	var txtUsuario = document.getElementById('usuario').value;
	var txtNombre = document.getElementById('nombre').value;
	var txtCorreo = document.getElementById('correo').value;
	var txtCelular = document.getElementById('celular').value;
	var p1 = document.getElementById("passwd").value;
	var p2 = document.getElementById("passwd2").value;
	var chkEstado = document.getElementById('checkBox');

	
    //Test campo obligatorio
    if(txtUsuario == null || txtUsuario.length == 0 || /^\s+$/.test(txtUsuario)){
    	alert('El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
        return false;
    }

    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
    	alert('El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
        return false;
    }

    //Test correo
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
    	alert('Debe escribir un correo válido');
        return false;
    }

    //Test contraseñas
    if (p1.length == 0 || p2.length == 0) {
    	alert("Los campos de la password no pueden quedar vacios");
        return false;
    } 
    else if (p1 != p2) {
    	alert("Las passwords deben de coincidir");
    	return false;
    } 


    //Test checkBox
    if(!chkEstado.checked){
    	alert('Debe seleccionar el checkbox');
        return false;
    }

    //Boton envio
    alert("Datos almacenados con éxito");
    return true; 

}