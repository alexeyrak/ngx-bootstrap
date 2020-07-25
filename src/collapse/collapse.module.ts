import { NgModule, ModuleWithProviders } from '@angular/core';

import { CollapseDirective } from './collapse.directive';

@NgModule({
  declarations: [CollapseDirective],
  exports: [CollapseDirective]
})
export class CollapseModule {
  static forRoot(): ModuleWithProviders<CollapseModule> {
    return { ngModule: CollapseModule, providers: [] };
  }
}
