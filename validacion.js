// Obtener año actual.

const actualYear = new Date().getFullYear();

// Asignar año actual al footer.

document.getElementById("year").innerHTML = actualYear;

//formulario

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSumit)
async function handleSumit(event) {
  event.preventDefault()
  new FormData(this)
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    header : {
      'Accept': 'application/json'
    }
  })
  if(response.ok){
    this.reset()
    Swal.fire({
      icon: 'success',
      title: '¡Muchas Gracias!',
      text: '¡Su mensaje se ha enviado correctamente, me contactaré con usted a la brevedad',
      showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
  })
  }
}

//validación.

function validarDatos(){
    window.event.preventDefault();
    
    if(document.formulario.nombre.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Campo Nombre Obligatorio!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
        })
       document.formulario.nombre.focus();
    }else if(document.formulario.email.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Campo E-mail Obligatorio!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
        })
        document.formulario.email.focus();
    }else if(document.formulario.email.value.indexOf("@")==-1 || document.formulario.email.value.indexOf(".")==-1 ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡El E-mail es invalido! Sugerencia xxxxx@xxxxxxxx',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
        })
        document.formulario.email.focus();
    }else if(document.formulario.asunto.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Campo Asunto Obligatorio!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
        })
        document.formulario.asunto.focus();
    }else if(document.formulario.mensaje.value==""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Campo Mensaje Obligatorio y debe tener un máximo de 500 caracteres!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
        })
        document.formulario.mensaje.focus();
    } else if(document.formulario.mensaje.value.length <= 500){
      this.reset()
    Swal.fire({
      icon: 'success',
      title: '¡Muchas Gracias!',
      text: '¡Su mensaje se ha enviado correctamente, me contactaré con usted a la brevedad',
      showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
  })     
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Mensaje demasiado extenso!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
        })
        document.formulario.mensaje.focus();
    }
}
document.querySelector("form").addEventListener("submit",validarDatos);