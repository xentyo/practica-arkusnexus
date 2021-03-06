import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from 'src/app/modules/signup/services/signup.service';
import { User } from 'src/app/modules/signup/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	signupForm: FormGroup;

	constructor ( public signupService: SignupService, 
								private fb: FormBuilder ) { }
	
	ngOnInit() {
		this.signupForm = this.fb.group({
			firstname:['',[
				Validators.required
			]],
			lastname:['',[
				Validators.required
			]],
			email:['',[
				Validators.required,
				Validators.email
			]],
			password:['',[
				Validators.required,
				Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
			]],
			agree:[false,[
				Validators.requiredTrue
			]]
		})
	}

	get firstname(){
		return this.signupForm.get('firstname');
	}

	get lastname(){
		return this.signupForm.get('lastname');
	}

	get email(){
		return this.signupForm.get('email');
	}

	get password(){
		return this.signupForm.get('password');
	}

	get agree(){
		return this.signupForm.get('agree');
	}

	onSubmit(){
		//consumir servicio conectado a api para crear usuarios
	}
	

}
