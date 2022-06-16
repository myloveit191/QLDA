import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  exports: [
    // Navbar
    MatSidenavModule,
    // List
    MatListModule,
    //Toolbar
    MatToolbarModule,
    //Icon
    MatIconModule,
    //Autocomplete
    MatAutocompleteModule,
    //Button
    MatButtonModule,
    //Menu
    MatMenuModule
  ]
})
export class MaterialModule { }
