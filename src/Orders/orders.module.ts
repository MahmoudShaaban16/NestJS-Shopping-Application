import { Module } from "@nestjs/common";
import { BasketsModule } from "src/baskets/baskets.module";

@Module({
    providers:[],
    controllers:[],
    imports:[BasketsModule],
    exports:[]
})
export class OrdersModule{

}