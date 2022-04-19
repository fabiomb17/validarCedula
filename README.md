# Validador de cédulas Dominicanas

## Funcionalidad

Este código realiza la única validación de comprobar que una cédula sea correcta en su estructura y que el código validador sea el correcto.

## Uso

Guarde el archivo ```validarCedula.js``` luego llame a la función ```valida(cedula)``` y le pasamos el parámetro de la cédula.

## Limitantes

Este código se limita a validar unicamente cédulas Dominicanas

## Ejemplo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <title>Validador de Cedulas Dominicanas</title>

      <style>
        #cedula {padding:10px;text-align:right;}
        button {padding:10px;text-align:center;}
      </style>
  </head>
  <body>

    <h1>Validador de Cedulas Dominicanas</h1>
    <input type="text" id="cedula" placeholder="Cedula" maxlength="11">
    <div id="result"></div>

    <script src="validarCedula.js"></script>
    <script>
      document.getElementById("cedula").addEventListener("keyup",function(e){
          document.getElementById("result").innerHTML=valida(this.value);
      });
    </script>
  </body>
</html>
```
