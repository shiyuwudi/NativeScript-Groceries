import { Component } from "@angular/core";
import { User, MockUser, NotAUser } from "./shared/user/user";
import { UserService } from "./shared/user/user.service";
import { Response } from '@angular/http';

@Component({
  selector: "my-app",
  providers: [UserService], // 服务，数组中的服务会被当成私有属性注入到被修饰的类的构造器里。
  templateUrl: "pages/login/login.html", // 模板html，也可以内联。
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"], // 样式
})
export class AppComponent {

  user: User;
  isLoggingIn = true;

  // 构造器，在这里实例化上面声明的属性
  // 如果属性作为参数，代表声明，实例化工作交给外部：包括依赖注入（typescript构造器语法）
  constructor(private userService: UserService) {
    this.user = new MockUser();
  }

  submit() {
    // alert("You’re using: " + this.user.email);
    if (this.isLoggingIn) {
      this.signIn();
    } else {
      this.signUp();
    }
  }

  signIn() {
    // TODO: 111
  }

  signUp() {
    const onSuccess = () => {
      alert("注册成功！");
      this.toggleDisplay();
    };
    const onFailure = (err: Response) => {
      const json = err.json();
      const message = json.message;
      alert(`注册失败...原因：${message}`);
    };
    this.userService.register(this.user).subscribe(onSuccess, onFailure);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

}