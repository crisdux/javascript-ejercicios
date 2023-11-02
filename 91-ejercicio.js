// filtrarLibrosPorAutor debe regresar un nuevo arr con todos los libros del autor pasado por parametro
const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 432 },
    { titulo: "1984", autor: "George Orwell", paginas: 328 },
    { titulo: "Matar un ruiseñor", autor: "Harper Lee", paginas: 281 },
  ];
  
  const filtrarLibrosPorAutor = (arrLibros, autor) => {
    return arrLibros.filter((libro) => libro.autor === autor)
  }
  
  console.log(filtrarLibrosPorAutor(libros, "Gabriel García Márquez"))