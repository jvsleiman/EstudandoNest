
import { Controller,Get,Post,Put,Delete, Body } from '@nestjs/common/decorators'
import { categoriaRepository } from './Categoria.repository';


@Controller('categorias')
export class CategoriaController{
    constructor(private categoriaRepository: categoriaRepository){}

    @Get()
    async getCategorias(){
        return this.categoriaRepository.listar();
        
    }

    @Post()
    async postCategoria(@Body() dadosCategoria){
            return this.categoriaRepository.salvar(dadosCategoria); 
        }
    
}