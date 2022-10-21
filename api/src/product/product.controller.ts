import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { ProdcutDocument } from './product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  createProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  ) {
    return this.productService.create(name, price, description);
  }

  @Get()
  findAllProducts(): Promise<ProdcutDocument[]> {
    return this.productService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findProduct(@Param('id') id: string): Promise<ProdcutDocument> {
    return this.productService.find(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  ): Promise<ProdcutDocument> {
    return this.productService.update(id, name, price, description);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
