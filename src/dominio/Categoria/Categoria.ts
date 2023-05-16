import { SubCategoria } from "../SubCategoria/SubCategoria";

export class Categoria{ 
    private id: number;  
    private descricao: string; 
    private dataInclusao: Date;
    private subCategorias: Array<SubCategoria>;


    constructor(id: number, descricao: string, dataInclusao: Date){
        this.id = id;
        this.descricao = descricao; 
        this.dataInclusao = dataInclusao; 
    }
}
