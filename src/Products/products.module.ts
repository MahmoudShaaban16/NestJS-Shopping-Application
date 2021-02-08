
import {Module} from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductsService } from './products.service';

@Module({
    providers:[ProductService, ProductsService],
    controllers:[ProductController],
    imports:[],
    exports:[]
})
export class ProductsModule{

}