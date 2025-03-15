import { NgModule } from '@angular/core';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [PhonePipe, AddressPipe, StatusPipe],
  exports: [PhonePipe, AddressPipe, StatusPipe],
})
export class PipesMoudle {}
