import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from 'product/product.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb+srv://cralperezhe:Sk1nny.d1pp1ng@nestjs-products-api.xdct4bk.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
