import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProdcutSchema } from './product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProdcutSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
