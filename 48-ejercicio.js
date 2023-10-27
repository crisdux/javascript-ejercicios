// dado el arr heros:
// agregar el campo id, autoicrmental
// cambiar las llaves "name" a "nombre"

const heros = [
    { name: 'Spider-Man' },
    { name: 'Thor' },
    { name: 'Black Panther' },
    { name: 'Captain Marvel' },
    { name: 'Silver Surfer' }
];

const cambiarHeros = (heros) =>{
    return heros.map((hero,index) => {
        return {
            id: index +1,
            nombre: hero.name      
        }
    })
}

console.log(cambiarHeros(heros));
