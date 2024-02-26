import { Cliente } from "./cliente"

export class Empresa extends Cliente{
  constructor(nombre, ahorro, categoria){
    super(nombre, ahorro)
    this.categoria = categoria
  }
}