import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { UpdatesComponent } from './updates/updates.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'cocktails',
    component: CocktailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'profiles',
    component: ProfilesComponent
  },
  {
    path: 'promotions',
    component: PromotionsComponent
  },
  {
    path: 'updates',
    component: UpdatesComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
