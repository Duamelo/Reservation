import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/_services/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
    hide = true;
  /*isSuccessful = false;
  isSignUpFailed = false;
*/

  errorMessage='';

  userDetailsForm: FormGroup;


  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;

  parentErrorStateMatcher = new ParentErrorStateMatcher();



 
  countries = [
    new Country('UY', 'Uruguay'),
    new Country('US', 'United States'),
    new Country('AR', 'Argentina')
  ];

  validation_messages = {
    'prenom': [
      { type: 'required', message: 'prenom is required' }
    ],
    'nom': [
      { type: 'maxlength', message: 'nom be more than 256 characters long' },
    ],
    'email': [
      { type: 'required', message: 'Please enter your email' },
    ],
    'password': [
      { type: 'required', message: 'Please enter your password' },
    ],
    'phone': [
      { type: 'required', message: 'Phone is required' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ]
  };

  account_validation_messages = {
    'prenom': [
      { type: 'required', message: 'le prénom est requis' },
      { type: 'minlength', message: 'la taille minimale est de 5 caractères' },
      { type: 'maxlength', message: 'lastname cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your lastname must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your lastname has already been taken' }
    ],
    'nom': [
      { type: 'required', message: 'firstname is required' },
      { type: 'minlength', message: 'firstname must be at least 5 characters long' },
      { type: 'maxlength', message: 'firstname cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your firstname must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your firstname has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ]
  }

  constructor(private fb: FormBuilder, private authService: AuthService) { }

 ngOnInit(): void { 
  this.createForms();
  }


  createForms() {
    // matching passwords validation
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    // country & phone validation
    let country = new FormControl(this.countries[0], Validators.required);

    let phone = new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        PhoneValidator.validCountryPhone(country)
      ])
    });

    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    // user details form validations
    this.userDetailsForm = this.fb.group({
      prenom: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
       ])),
      nom: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
       ])),
       email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matching_passwords: this.matching_passwords_group,
      country_phone: this.country_phone_group
    });

  }


  onSubmit(){
    this.authService.register(this.userDetailsForm).subscribe(
      data => {
        console.log(data);
      },
      err => {
        this.errorMessage =  err.error.message;
       // this.isSignUpFailed = true;
      }
    );
  }

}
