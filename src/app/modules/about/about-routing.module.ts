import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
    { path: '', component: AboutComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class AboutRoutingModule {}
