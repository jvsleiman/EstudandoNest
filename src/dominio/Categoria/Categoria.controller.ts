import { CategoriaService } from './Categoria.service'
import { Controller,Get,Post,Put,Delete } from '@nestjs/common/decorators'


@Controller('categorias')
export class CategoriaController{
    constructor(private readonly categoriaService: CategoriaService){}

@Get()
getCategorias(): string{
    return this.categoriaService.getCategorias(); 
}
}