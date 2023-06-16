import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Complexity } from 'src/app/types';
import { validatePass } from 'src/app/validators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  passwordForm: FormGroup;
  complexity: Complexity = null;

  @ViewChild('pass') passInput: ElementRef | null = null

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.passInput?.nativeElement.focus();
    });
  }

  evaluatePassword(): void {
    this.complexity = validatePass(this.passwordForm)
  }
}
