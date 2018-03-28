import { NgModule } from '@angular/core';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  imports: [ShopRoutingModule],
  declarations: [ShopComponent],
  providers: []
})
export class ShopModule {}
