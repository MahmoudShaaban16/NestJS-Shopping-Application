
import {Module} from '@nestjs/common';
import { ProductController } from './product.controller';
@Module({
    providers:[],
    controllers:[ProductController],
    imports:[],
    exports:[]
})
export class ProductsModule{

}