import * as EmailValindator from "email-validator";

export class User {
    email: string;
    password: string;
    isValidEmail() {
        return EmailValindator.validate(this.email);
    }
}

export class MockUser extends User {
    email = "289052669@qq.com";
    password = "123456";
}

export class GroceriesUser extends User {
    email = "user@nativescript.org";
    password = "password";
}

export class NotAUser {}