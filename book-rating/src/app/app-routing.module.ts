import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    // siehe https://angular.io/api/router/InMemoryScrollingOptions#scrollPositionRestoration
    scrollPositionRestoration: "top" // besser als nix
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
