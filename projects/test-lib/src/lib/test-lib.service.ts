import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TestLibService {

	constructor() { }

	log(): void {
		console.log('this thing is working!');
	}
}
