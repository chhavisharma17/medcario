import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [
  {path: 'page/:slug' , component: PageComponent},
  {path: 'page' , component: PageComponent},
  {path: 'home', component: HomeComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
