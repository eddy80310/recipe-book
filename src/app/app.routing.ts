import { HostListener } from '@angular/core';
import { HomeComponent } from './home.component';
import { recipesRouting } from './recipes/recipes.routing';
import { Routes, RouterModule} from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
    { path: 'shopping-list', loadChildren:'app/shopping-list/shopping-list.module#ShoppingListModule'},
]

export const routing = RouterModule.forRoot(APP_ROUTES);

