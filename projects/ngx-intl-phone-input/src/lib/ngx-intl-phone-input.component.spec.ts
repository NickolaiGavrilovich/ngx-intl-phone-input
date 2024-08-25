import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntlPhoneInputComponent } from './ngx-intl-phone-input.component';
import {async} from "rxjs";

describe('NgxIntlTelInputComponent', () => {
	let component: NgxIntlPhoneInputComponent;
	let fixture: ComponentFixture<NgxIntlPhoneInputComponent>;

	// @ts-ignore
  beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgxIntlPhoneInputComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxIntlPhoneInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
