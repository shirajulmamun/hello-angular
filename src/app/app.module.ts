import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
=======
>>>>>>> d622f4f4bf055abc2cef99282ff35ec6de17ec87

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeroesComponent,
    ProductListComponent,
    ProductItemComponent
=======
    HeroesComponent
  
>>>>>>> d622f4f4bf055abc2cef99282ff35ec6de17ec87
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
