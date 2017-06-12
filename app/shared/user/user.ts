import * as EmailValindator from "email-validator";

/* tslint:disable max-classes-per-file */
export class User {
    public email: string;
    public password: string;

    public username: string;
    public token: string;
    public userId: string;
    public verify: string;
    public isValidEmail() {
        return EmailValindator.validate(this.email);
    }
}

export class ZhenTing extends User {
    public username = "zt";
    public password = "123456";
}

export class MuSiWen extends User {
    public username = "msw";
    public password = "123456";
}

export class ShiYu extends User {
    public username = "sy";
    public password = "123456";
}

export class MockUser extends User {
    public email = "289052669@qq.com";
    public password = "123456";
}

export class GroceriesUser extends User {
    public email = "user@nativescript.org";
    public password = "password";
}

export class NotAUser {}
