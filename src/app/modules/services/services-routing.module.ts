import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServicesComponent } from './components/services/services.component';

const appRoutes: Routes = [
    { path: '', component: ServicesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class ServicesRoutingModule {}
