import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-safe',
  imports: [CommonModule],
  templateUrl: './safe.html',
  styleUrls: ['./safe.css']
})
export class Safe {
  input = '';
  correctPassword = '231096';
  error = false;

  constructor(private router: Router) {}

  get maskedInput(): string {
    return this.input ? this.input.replace(/./g, '•') : '';
  }

  press(num: string) {
    if (this.input.length < this.correctPassword.length) {
      this.input += num;
    }

    if (this.input.length === this.correctPassword.length) {
      this.checkPassword();
    }
  }

  clear() {
    this.input = '';
    this.error = false;
  }

  checkPassword() {
    if (this.input === this.correctPassword) {
      this.router.navigate(['/birthday']);
    } else {
      this.error = true;
      setTimeout(() => {
        this.clear();
      }, 1000);
    }
  }
}
