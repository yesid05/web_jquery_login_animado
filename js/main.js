/*
* Función para validar el email, utilizando una expresión regular.
*/

function validarEmail(unEmail){
	var expresion = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(expresion.test(unEmail)){
		return true;
	}else{
		return false;
	}
}

$(document).ready(function(){
	/*
	* Obtenemos las ayudas visuales para manipularlas.
	*/
	var alertaAyudaMail = $('#alerta-ayuda-mail');
	var alertaErrorMail = $('#alerta-error-mail');

	var alertaAyudaContrasena = $('#alerta-ayuda-contrasena');
	var alertaErrorContrasena = $('#alerta-error-contrasena');

	//Acciones a realizar si hacemos click en la caja de texto e-mail.
	$('#emailId').click(function(){
		//Mostramos la ayuda para E-mail y ocultamos los demás elementos que no se necesiten.
		alertaAyudaMail.fadeIn();
		alertaErrorMail.fadeOut();

		alertaAyudaContrasena.fadeOut();
		alertaErrorContrasena.fadeOut();


		if($(this).hasClass('alerta')){
			$(this).removeClass('alerta');
		}
	});

	//Acciones a realizar si hacemos click en la caja de texto contraseña.
	$('#contrasenaId').click(function(){
		//Mostramos la ayuda para contraseña y ocultamos los demás elementos que no se necesiten.
		alertaAyudaContrasena.fadeIn();
		alertaErrorContrasena.fadeOut();

		alertaAyudaMail.fadeOut();
		alertaErrorMail.fadeOut();

		if($(this).hasClass('alerta')){
			$(this).removeClass('alerta');

		}
	});

	//Acciones a realizar si hacemos click en el boton 
	$('#btn-login-Id').click(function(){

		//Obtiene los valores escritos por el usuario.
		var email = $('#emailId').val();
		var contrasena = $('#contrasenaId').val();

		//Si el usuario no a escrito nada.
		if(email == '' && contrasena == ''){
			$(".login").addClass('animated bounce');
			$(".login").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('animated bounce');
			});

			$('#emailId').addClass('alerta');
			$('#contrasenaId').addClass('alerta');

			alertaAyudaContrasena.fadeOut();
			alertaAyudaMail.fadeOut();

			alertaErrorMail.fadeIn();
			alertaErrorContrasena.fadeIn();

		//Si el correo no es válido o no ha escrito nada.	
		}else if(!(validarEmail(email)) || email == ''){
			$('#emailId').addClass('animated wobble alerta');			
			$("#emailId").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('animated wobble');
			});
			alertaErrorMail.fadeIn();
		//Si no ha escrito una contraseña
		}else if(contrasena == ''){
			$('#contrasenaId').addClass('animated wobble alerta');
			$("#contrasenaId").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('animated wobble');
			});
			alertaErrorContrasena.fadeIn();

		//Si ha llenado los campos de forma correcta.
		}else{
			/*
			Escriba a continuación el método POST para enviar datos al archivo php / servlet.
			$.post("nombre_archivo.php", {
				email1: email,
				password1: password
			}, function(data) {
				if (data == 'success') {
					$("form")[0].reset();

				}
			alert(data);
			*/		
			$('.login').addClass('animated fadeOut');
			$(".login").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).css('display', 'none');
				$('.mesaje-bienvenida').html('Bienvenido...!').addClass('animated fadeIn');	
			});
			
		}
	});
});