import {} from './Categoria.service'
import {} from './Categoria.controller'

@Module({
    imports: [],
    controllers: [CategoriaController],
    providers: [CategoriaService],
  })
  export class CategoriaModule {}
  