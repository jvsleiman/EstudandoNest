import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './dominio/Categoria/Categoria.module'

@Global()
@Module({
  imports: [CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
