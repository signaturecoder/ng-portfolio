import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { EnsureModuleLoadedOnceGaurd } from './coreModuleLoadedOnceGuard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[HeaderComponent, SharedModule]
})
export class CoreModule extends EnsureModuleLoadedOnceGaurd{
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
  super(parentModule);
  }
}
