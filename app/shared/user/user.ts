export class User {
    email: string;
    password: string;
}

export class MockUser extends User {
    email = "289052669@qq.com";
    password = "123456";
}

export class NotAUser {}