import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, UpperCasePipe } from '@angular/common';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, UpperCasePipe, PasswordStrengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'usense-angular-test-task';
  inputValue: string = '';
  firstIndicator: string = 'gray';
  secondIndicator: string = 'gray';
  thirdIndicator: string = 'gray';

  onInputChamge(event: Event) {
    const alphanumericSymbols =
      /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
    const combination =
      /(?=.*[a-z])(?=.*[A-Z])|(?=.*[0-9])|(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const lsnRegex = /^(?=.*[a-zA-Z])(?=.*[\W_])(?=.*\d).+$/;

    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;

    if (
      this.inputValue.length >= 8 &&
      alphanumericSymbols.test(this.inputValue)
    ) {
      this.setIndicators('red', 'gray', 'gray');
    }
    if (this.inputValue.length >= 8 && combination.test(this.inputValue)) {
      this.setIndicators('yellow', 'yellow', 'gray');
    }
    if (this.inputValue.length >= 8 && lsnRegex.test(this.inputValue)) {
      this.setIndicators('green', 'green', 'green');
    }

    if (this.inputValue.length < 8) {
      this.setIndicators('red', 'red', 'red');
    }
    if (this.inputValue.length === 0) {
      this.setIndicators('gray', 'gray', 'gray');
    }
  }
  private setIndicators(first: string, second: string, third: string) {
    this.firstIndicator = first;
    this.secondIndicator = second;
    this.thirdIndicator = third;
  }
}