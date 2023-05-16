import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoriaService{
    getCategorias(): string{
        return 'Lista de Categorias'; 
    }
}