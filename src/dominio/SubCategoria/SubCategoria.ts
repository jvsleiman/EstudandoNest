import { Produto } from "../Produto/Produto";

export class SubCategoria{
    private id: number;  
    private idCategoria: number;
    private descricao: string;
    private dataInclusao: Date;
    private produtos: Array<Produto>

    constructor(id:number, idCategoria: number, descricao: string, dataInclusao: Date){
        this.id = id;
        this.idCategoria = idCategoria;
        this.descricao = descricao; 
        this.dataInclusao = dataInclusao
    }
}