import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LayoutModule } from './layout/layout.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FooterOnlyLayoutComponent } from './layout/footer-only-layout/footer-only-layout.component';
import { HttpClientModule } from '@angular/common/http';

// const routes: Routes = [
//   {
//     path: '',
//     component: MainLayoutComponent,
//     canActivate: [authGuard],
//     children: [
//       {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full',
//       },
//       {
//         path: 'dashboard',
//         loadChildren: () =>
//           import('./pages/dashboard/dashboard.module').then(
//             m => m.DashboardModule,
//           ),
//       },
//       {
//         path: 'agents',
//         loadChildren: () =>
//           import('./pages/agents/agents.module').then(m => m.AgentsModule),
//       },
//     ],
//   },
//   {
//     path: '',
//     component: FooterOnlyLayoutComponent,
//     children: [
//       {
//         path: 'login',
//         loadChildren: () =>
//           import('./pages/login/login.module').then(m => m.LoginModule),
//       },
//     ],
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m => m.DashboardModule,
          ),
      },
    ],
  },
  {
    path: 'login',
    component: FooterOnlyLayoutComponent,
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
