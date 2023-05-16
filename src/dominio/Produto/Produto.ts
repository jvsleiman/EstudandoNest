export class Produto{
    private id: number;
    private idSubCategoria: number;
    private idCategoria: number; 
    private descricao: string; 
    private valor: number; 
    private dataInclusao: Date;

    constructor(id: number, idSubCategoria: number, idCategoria: number, descricao: string, valor: number, dataInclusao: Date){
        this.id = id;
        this.idSubCategoria = idSubCategoria;
        this.idCategoria = idCategoria;
        this.descricao = descricao; 
        this.valor = valor; 
        this.dataInclusao = dataInclusao; 
    }
}