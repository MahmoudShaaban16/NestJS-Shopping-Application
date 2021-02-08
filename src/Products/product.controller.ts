import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res } from "@nestjs/common";
import { AddProductDTO } from "./addProductDTO";
import { Product } from "./product";
import {Response,Request} from 'express';
import { ProductService } from "./product.service";
import { ProductsService } from "./products.service";
@Controller('products')
export class ProductController {

    constructor(private productsService:ProductsService){

    }
   
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
    @Post()
    Add(@Body("name") name:string,@Body("price") price:number, @Body("category") category:string, @Body("description") description:string){

        let newProduct:Product={id:10, name:name,price:price,category:category,description:description};
        this.products.push(newProduct);
       return newProduct;
    }

    @Post("AddV2")
    AddV2(@Body() newProduct:AddProductDTO){
       
       return this.productsService.add(newProduct);

    }

    @Post("AddWithRequest")
    AddV3(@Req() request:Request, @Res() response:Response){
        let product:Product;
        
        product=Object.assign({},{id:12},request.body);
        this.products.push(product);
        response.status(200).json(product);
    }

    @Put("/:id")
    Update(@Param("id") productId:number,@Body("price") price:number,@Body("description") description:string){

        let productToUpdate=this.products.filter(p=>p.id==productId);
        if(productToUpdate && productToUpdate.length==1){
           productToUpdate[0].price=price;
           productToUpdate[0].description=description;
        }

        return productToUpdate[0];

    }

    @Delete("/:id")
    Delete(@Param("id") productId:number){

        this.products=this.products.filter(p=>p.id!=productId);
        return this.products;
    }
  
    @Get('GetAll')
    GetAll(): any[] {
        return this.products;
    }

    @Get("FindById/:id")
    FindById(@Param("id") productId: number) {
        return this.products.filter(p => p.id == productId);
    }
    @Get("filter")
    Filter(@Query("category") productCategory: string): Product[] {
        return this.products.filter(p => p.category == productCategory);
    }

    
}