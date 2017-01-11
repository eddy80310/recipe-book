import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
import { shoppingListRouting } from './shopping-list.routing'

@NgModule({
    declarations: [ShoppingListComponent, ShoppingListAddComponent],
    imports: [FormsModule, SharedModule, shoppingListRouting]
})
export class ShoppingListModule {}
