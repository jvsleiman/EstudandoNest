import {CategoriaService} from './Categoria.service'
import {CategoriaController} from './Categoria.controller'
import { Module } from '@nestjs/common'

@Module({
    imports: [],
    controllers: [CategoriaController],
    providers: [CategoriaService],
  })
  export class CategoriaModule {}
  