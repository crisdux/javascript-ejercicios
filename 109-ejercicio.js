// Escribe una función en JavaScript llamada validarContrasena que tome una contraseña como entrada y determine si es válida según ciertos criterios. La contraseña se considera válida si cumple con las siguientes condiciones:

// Tiene al menos 8 caracteres de longitud.
// Contiene al menos una letra minúscula y una letra mayúscula.
// Contiene al menos un número.
// Contiene al menos un carácter especial de los siguientes: !@#$%^&*()_+[]{}|;:',.<>?.
// La función debe devolver true si la contraseña es válida y false en caso contrario.

const verificarLongitud = (cadena) => {
    return cadena.length >= 8;
  }
  
  const verificarNumero = (cadena) => {
    const numeros = [1,2,3,4,5,6,7,8,9,0];
    return numeros.some((item) => cadena.includes(item))
  }
  
  const verificaCaracterEspecial = (cadena) => {
    const caracteres = ['!', '@', '#', '$', '%', ' ', '^', '&', '*', '(', ')', '_', '+', '[', ']', '{', '}', '|', ';', ':', "'", ',', '.', '<', '>', '?'];
    return caracteres.some((item) => cadena.includes(item))
  }
  
  const veriticarLower = (cadena) => { // 97 122
    return [...cadena].map((item) => item.codePointAt(0))
           .some((item) => item>=97 && item<=122 )
  }
  
  const veriticarUpper = (cadena) => { 
    return [...cadena].map((item) => item.codePointAt(0))
      .some((item) => item >= 65 && item <= 90)
  }
  
  
  const validarContrasena = (cadena) => {
    return verificarLongitud(cadena) 
          && verificarNumero(cadena) 
          && verificaCaracterEspecial(cadena) 
          && veriticarLower(cadena) 
          && veriticarUpper(cadena)
  }
  
  console.log(validarContrasena("Radiohead@159"))
  
  