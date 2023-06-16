import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Complexity } from 'src/app/types';
import { validatePass } from 'src/app/validators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  passwordForm: FormGroup;
  complexity: Complexity = null;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.minLength(8)]]
    });
  }

  evaluatePassword(): void {
    this.complexity = validatePass(this.passwordForm)
  }
}
