import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule' },
    { path: 'about', loadChildren: './modules/about/about.module#AboutModule' },
    { path: 'products', loadChildren: './modules/products/products.module#ProductsModule' },
    { path: 'services', loadChildren: './modules/services/services.module#ServicesModule' },


];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
