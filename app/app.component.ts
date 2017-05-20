import { Component } from "@angular/core";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  template: `
  <StackLayout>
  <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
    <TextField hint="Email Address" keyboardType="email" [(ngModel)]="email"
      autocorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="Password" secure="true"></TextField>
   <Button [text]="isLoggingIn ? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
<Button [text]="isLoggingIn ? 'Sign up' : 'Back to login'" (tap)="toggleDisplay()"></Button>

    </StackLayout>
  `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
})
export class AppComponent {
  email = "nativescriptrocks@telerik.com";
  isLoggingIn = true;
  submit() {
    alert("You’re using: " + this.email);
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}