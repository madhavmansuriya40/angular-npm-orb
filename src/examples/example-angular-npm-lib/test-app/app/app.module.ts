import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestLibModule } from 'projects/test-lib/src/public-api';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		TestLibModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
