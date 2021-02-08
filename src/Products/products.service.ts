import { Injectable } from '@nestjs/common';
import { AddProductDTO } from './addProductDTO';
import { Product } from './product';
import { ProductController } from './product.controller';
import { ProductsModule } from './products.module';

@Injectable()
export class ProductsService {

    products: Product[] = [
        { id: 1, name: 'Lenovo laptop', price: 8000, category: 'laptops', description: ' lenvo ideapad i5' },
        { id: 2, name: 'Mackbook air 2018', price: 22000, category: 'laptops', description: ' Mackbook air, 13 inch, 128 SSD' },
        { id: 3, name: 'Canon Camera ', price: 20000, category: 'electronics', description: ' Canon DSLR camera, 24MB pixel' },
        { id: 4, name: 'Apple watch', price: 5000, category: 'electronics', description: ' Apple smart watch Gen5' },
        { id: 5, name: 'Samsung Galaxy Note 10.1', price: 7000, category: 'electronics', description: ' Samsung galaxy note tablet, 10.1 screen, 16GB storage, 4GB RAM' },
        { id: 6, name: 'Guhina Orange Juice', price: 20, category: 'food', description: 'Fresh juice, no sugar' },
        { id: 7, name: 'Classic Nescafee', price: 8000, category: 'food', description: ' classic nescafee' },
        { id: 8, name: 'El ymni coffee', price: 18, category: 'food', description: ' coffee' },
        { id: 9, name: 'Orange', price: 20, category: 'food', description: '.5KG orange' }]

        add(newproduct:AddProductDTO){
        let product:Product;
        product=Object.assign({},{id:11},newproduct);
        this.products.push(product);
        return product;
        }
        getAll(){

        }
        getBy(id){

        }

        update(id,product){

        }

        delete(id){

        }

}
