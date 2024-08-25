import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import {NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask} from 'ngx-mask';
import {NgxIntlPhoneInputComponent} from "./ngx-intl-phone-input.component";

export const dropdownModuleForRoot: ModuleWithProviders<BsDropdownModule> = BsDropdownModule.forRoot();

@NgModule({
	declarations: [NgxIntlPhoneInputComponent, NativeElementInjectorDirective],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		dropdownModuleForRoot,
		NgxMaskDirective,
	],
	providers: [NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask()],
	exports: [NgxIntlPhoneInputComponent, NativeElementInjectorDirective],
})
export class NgxIntlPhoneInputModule {

}
