import { Injectable } from "@nestjs/common/";

@Injectable()
export class categoriaRepository{
    private categoria = []; 

    async salvar(categoria){
        this.categoria.push(categoria); 
    }

    async listar(){
        return this.categoria;
    }
}