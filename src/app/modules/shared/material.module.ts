import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
    exports: [
       //Icon
       MatIconModule,
       //Autocomplete
       MatAutocompleteModule,
       //Button
       MatButtonModule,
       //Menu
       MatMenuModule,
       //Form Field -- Phải có thêm MatInput
       MatFormFieldModule,
       MatInputModule,

       //Select
       MatSelectModule,

       //Data Picker
       MatDatepickerModule,
       MatNativeDateModule,

       //Chips
       MatChipsModule,

       //Dialog
       MatDialogModule
    ]
})
export class MaterialModule { }
