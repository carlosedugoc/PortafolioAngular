import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, PortafolioComponent, PortafolioItemComponent } from './components/index.paginas'

const routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: PortafolioItemComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash:true } );