import {NgModule} from '@angular/core';
import {MatIconModule, MatFormFieldModule, MatInputModule , MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
  MatToolbarModule, MatButtonModule, MatCardModule, MatDividerModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule , MatFormFieldModule , MatInputModule , MatDatepickerModule, MatNativeDateModule ,
    MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule, MatListModule ],
  exports: [MatButtonModule, MatIconModule , MatFormFieldModule , MatInputModule , MatDatepickerModule , MatNativeDateModule ,
    MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule,  MatListModule  ]
})

export  class MaterialModule {
}
