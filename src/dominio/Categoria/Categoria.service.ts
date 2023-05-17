import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoriaService{
    async getCategorias(){
        return {status:'Lista de Categorias'}
  }
async postCategoria(dadosCategoria){
    return dadosCategoria; 
}
}