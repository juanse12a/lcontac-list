// Definir un array para almacenar los contactos predeterminados
const contactosPredeterminados = [
  { id: 1, nombres: "Juan", apellidos: "Pérez", telefono: "123-456-7890" },
  { id: 2, nombres: "María", apellidos: "López", telefono: "987-654-3210" },
  { id: 3, nombres: "Carlos", apellidos: "González", telefono: "555-123-4567" }
];


const listaDeContactos = [...contactosPredeterminados];

function agregarContacto(id, nombres, apellidos, telefono) {
  const nuevoContacto = { id, nombres, apellidos, telefono };
  listaDeContactos.push(nuevoContacto);
  console.log(`Contacto "${nombres} ${apellidos}" agregado.`);
}

function borrarContacto(id) {
  const indice = listaDeContactos.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    const contactoBorrado = listaDeContactos.splice(indice, 1)[0];
    console.log(`Contacto "${contactoBorrado.nombres} ${contactoBorrado.apellidos}" eliminado.`);
    return contactoBorrado;
  } else {
    console.log(`No se encontró un contacto con ID ${id}.`);
    return null;
  }
}


function actualizarContacto(id, nuevosDatos) {
  const contactoActualizado = listaDeContactos.find(contacto => contacto.id === id);
  if (contactoActualizado) {
   
    Object.assign(contactoActualizado, nuevosDatos);
    console.log(`Contacto actualizado con ID ${id}`);
    console.log(contactoActualizado);
  } else {
    console.log(`No se encontró un contacto con ID ${id}. No se pudo actualizar.`);
  }
}

function imprimirContactos() {
  console.log("Lista de Contactos:");
  listaDeContactos.forEach(contacto => {
    console.log(`ID: ${contacto.id}, Nombres: ${contacto.nombres}, Apellidos: ${contacto.apellidos}`);
    console.log(`Teléfono: ${contacto.telefono}`);
  });
}


agregarContacto(4, "Pedro", "Sánchez", "555-987-6543");
imprimirContactos();
actualizarContacto(2, { nombres: "Marta", telefono: "999-888-7777" });
imprimirContactos();
borrarContacto(3);
imprimirContactos();
