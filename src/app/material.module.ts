import {
  MatListModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatListModule, MatIconModule, MatButtonModule],
  exports: [MatListModule, MatIconModule, MatButtonModule]
})
export class MaterialModule {}
