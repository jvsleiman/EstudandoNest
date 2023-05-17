export class CategoriaRepositorio{
    private categoria = []; 

    async salvar(categoria){
        this.categoria.push(categoria); 
    }

    async listar(){
        return this.categoria;
    }
}