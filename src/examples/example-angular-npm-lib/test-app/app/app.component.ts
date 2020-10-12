import { Component } from '@angular/core';
import { TestLibService } from 'projects/test-lib/src/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-npm-template-with-sample-app';

	constructor(private testLibService: TestLibService) {
		this.testLibService.log();
	}
}
