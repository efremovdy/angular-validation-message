import { NgModule, ModuleWithProviders } from '@angular/core';

import { ValidationMessageComponent } from './components/ValidationMessageComponent';
import { ValidationMessageDirective } from './directives/ValidationMessageDirective';
import { ValidationErrorBuilder } from './services/errorBuilder/ValidationErrorBuilder';

export const declarations = [
  ValidationMessageDirective,
  ValidationMessageComponent
];

@NgModule({
  declarations: declarations,
  exports: declarations,
  entryComponents: [
    ValidationMessageComponent
  ],
  providers: [
    ValidationErrorBuilder,
    {
      provide: ValidationMessageComponent,
      useValue: ValidationMessageComponent
    }
  ]
})
export class ValidationMessageModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ValidationMessageModule,
      providers: []
    };
  }
}
