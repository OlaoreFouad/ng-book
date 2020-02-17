import { Component } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myForm: FormGroup;
  sku: AbstractControl;
  formSubmitted = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.compose([
        Validators.required, Validators.minLength(3), this.beginsWithMoney
      ])]
    });

    this.sku = this.myForm.get('sku');
  }

  onSubmit() {
    this.formSubmitted = true;
  }

  // Custom Validator: Checks if the text starts with money
  beginsWithMoney(control: FormControl): { [s: string]: boolean } {
    const value = (control.value as string).toLowerCase();
    if (!value.startsWith('money')) {
      return { beginsWithMoney: true };
    } else {
      return null;
    }
  }
}
