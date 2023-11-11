// Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

const input = (mensaje) => {
  return prompt(mensaje);
};

const login = () => {
  let userCorrecto = {
    userNombre: "dux",
    userPass: "123",
  };
  const { userNombre, userPass } = userCorrecto;

  let intentos = 3;
  while (intentos > 0) {
    let userInput = input("ingrese user");
    let passInput = input("ingrese pass");
    if (userNombre === userInput && userPass === passInput) {
      alert("bienvenido");
      break;
    } else {
      intentos--;
      alert("Le quedan " + intentos + " intentos");
    }
  }
  if (intentos === 0) alert("Lo siento, intentelo mas tarde!");
};

login();
