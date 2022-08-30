export const validateEmail = (valores, errores) => {
  if (!valores.email) {
    errores.email = 'Ingrese su email por favor';
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)
  ) {
    errores.email = 'Revise la casilla de su correo por favor';
  }

  return errores;
};

export const validatePassword = (valores, errores) => {
  if (!valores.password) {
    errores.password = 'Ingrese su email por favor';
  } else if (
    !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.password)
  ) {
    errores.password =
      'Su contraseña debe contener al menos un dígito, al menos una minúscula y al menos una mayúscula';
  }

  return errores;
};

export const validateNombre = (valores, errores) => {
  if (!valores.nombre) {
    errores.nombre = 'Ingrese su nombre por favor';
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
    errores.nombre = 'Revise su nombre por favor, solo letras';
  }

  return errores;
};

export const validateApellidos = (valores, errores) => {
  if (!valores.apellido) {
    errores.apellido = 'Ingrese su apellido por favor';
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
    errores.apellido = 'Revise su apellido por favor, solo letras';
  }

  return errores;
};
