import {CategoriaController} from './Categoria.controller'
import { Module } from '@nestjs/common'
import { categoriaRepository } from './Categoria.repository'

@Module({
    imports: [],
    controllers: [CategoriaController],
    providers: [categoriaRepository],
  })
  export class CategoriaModule {}
  