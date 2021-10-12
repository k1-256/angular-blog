import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';

const adminRoute: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'post/:id/edit', component: EditComponent },
            { path: 'create', component: CreateComponent }
        ]
    }
]

@NgModule({
    declarations: [
        AdminLayoutComponent,
        LoginComponent,
        CreateComponent,
        DashboardComponent,
        EditComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {
                    path: '', component: AdminLayoutComponent, children: [
                      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                      {path: 'login', component: LoginComponent},
                      {path: 'dashboard', component: DashboardComponent},
                      {path: 'create', component: CreateComponent},
                      {path: 'post/:id/edit', component: EditComponent}
                    ]
                  }
            ]
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AdminModule {

}
