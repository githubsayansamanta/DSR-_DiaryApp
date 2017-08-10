import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ********* Import all component class */
import { LoginComponent } from './login/login.component'

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,   /** Login route......... */
        pathMatch: 'full'
    }];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
