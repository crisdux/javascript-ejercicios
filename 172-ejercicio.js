function gusanoHambriento(lista) {
  // Buscar la posición de la oruga y la calavera (veneno)
  const indiceOruga = lista.indexOf("🐛");
  const indiceVeneno = lista.indexOf("💀");

  return lista.slice(0, indiceOruga).concat(lista.slice(indiceVeneno + 1));
}

console.log(
  gusanoHambriento(["🌱", "🌻", "🌱", "🐛", "🌱", "🌸", "🌱", "🌱", "💀", "🌷"])
);
// Ingrese plantas y oruga: 🌱🌻🌱🐛🌱🌸🌱🌱💀🌷
// Plantas sobrevivientes: 🌱🌻🌱🌷
console.log(
  gusanoHambriento(["🐛", "🌻", "🌱", "🌱", "🌸", "🌱", "🌱", "💀", "🌷"])
);
