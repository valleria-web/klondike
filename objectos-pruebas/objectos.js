const ContainerX = require('./containerX');

// Crear objetos A y B
const objetoA = new ContainerX();
const objetoB = new ContainerX();

// Interacción entre A y B
objetoA.enviarNumero(10+20, objetoB); // A envía el número 5 a B
objetoB.enviarNumero(2, objetoA); // B envía el número 10 a A

console.log('Datos de A:', objetoA.data); // Debería mostrar [5, 10]
console.log('Datos de B:', objetoB.data); // Debería mostrar [5, 10]