import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';

const appRoutes: Routes = [
    { path: '', component: ProductsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class ProductsRoutingModule {}
