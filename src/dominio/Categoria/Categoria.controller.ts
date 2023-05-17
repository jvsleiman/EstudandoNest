import { CategoriaService } from './Categoria.service'
import { Controller,Get,Post,Put,Delete, Body } from '@nestjs/common/decorators'
import { CategoriaRepositorio } from './CategoriaRepositorio';


@Controller('categorias')
export class CategoriaController{
    constructor(private readonly categoriaService: CategoriaService){}

    private categoriaRepositorio = new CategoriaRepositorio(); 

@Get()
async getCategorias(){
    return this.categoriaRepositorio.listar(); 
}

@Post()
async postCategoria(@Body() dadosCategoria){
        this.categoriaRepositorio.salvar(dadosCategoria);
        return this.categoriaService.postCategoria(dadosCategoria); 
    }
}