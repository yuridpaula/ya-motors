import{ Routes } from '@angular/router'
import { AccessComponent } from './access/access.component';

export const ROUTES: Routes = [
    {path: 'login', component: AccessComponent}
    //{path: 'home', component: HomeComponent, canActivate: [AutenticacaoGuard]},
]