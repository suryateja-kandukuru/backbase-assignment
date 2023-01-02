import { NgModule } from '@angular/core';
import { SharedLibModule } from '@back-base-assignment/shared-lib';

@NgModule({
  imports: [SharedLibModule.forRoot()],
})
export class SharedLibraryModule {}
