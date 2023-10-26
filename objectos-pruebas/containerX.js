class ContainerX {
  constructor() {
    this.data = [];
  }

  enviarNumero(numero, otroObjeto) {
    otroObjeto.data.push(numero);
  }
}

module.exports = ContainerX;


  