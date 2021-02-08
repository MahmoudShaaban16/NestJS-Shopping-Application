
import { Module } from '@nestjs/common';
import { ProductsModule } from './Products/products.module';
import { BasketsModule } from './baskets/baskets.module';
import { OrdersModule } from './Orders/orders.module';


@Module({
  imports: [ProductsModule, BasketsModule,OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
