
const listaDeContactos = [
  { nombreApellido: "Juan Pérez" },
  { nombreApellido: "María López" },
  { nombreApellido: "Carlos González" }
];

function agregarContacto(nombreApellido) {
  const nuevoContacto = { nombreApellido };
  listaDeContactos.push(nuevoContacto);
  console.log(`Contacto "${nombreApellido}" agregado.`);
}


function borrarContacto(nombreApellido) {
  const indice = listaDeContactos.findIndex(contacto => contacto.nombreApellido === nombreApellido);
  if (indice !== -1) {
    const contactoBorrado = listaDeContactos.splice(indice, 1)[0];
    console.log(`Contacto "${nombreApellido}" eliminado.`);
    return contactoBorrado;
  } else {
    console.log(`No se encontró el contacto "${nombreApellido}".`);
    return null;
  }
}


function imprimirContactos() {
  console.log("Lista de Contactos:");
  listaDeContactos.forEach(contacto => {
    console.log(contacto.nombreApellido);
  });
}

// Ejemplos de uso
agregarContacto("Pedro Sánchez");
imprimirContactos();
borrarContacto("Carlos González");
imprimirContactos();
