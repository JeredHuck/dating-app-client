import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./features/landing-page/landing-page.component").then((c) => c.LandingPageComponent)
  }
];
