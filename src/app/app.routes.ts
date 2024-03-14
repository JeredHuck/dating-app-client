import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./features/landing-page/landing-page.component").then((c) => c.LandingPageComponent)
  },
  {
    path: 'login',
    loadComponent: () => import("./features/auth/login/login.component").then((c) => c.LoginComponent)
  },
  {
    path: 'home',
    loadComponent: () => import("./features/home-page/home-page.component").then((c) => c.HomePageComponent)
  }
];
