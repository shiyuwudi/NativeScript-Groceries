import { Component, OnInit, ElementRef, ViewChild } from "@angular/core"; // OnInit: ts类接口，需要实现。
import { Router } from "@angular/router";
import { User, MockUser, NotAUser, GroceriesUser } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Response } from "@angular/http";
import { Page } from "ui/page"; // tsconfig配置省略了前面的路径
import { TextField } from "ui/text-field"; // tsconfig配置省略了前面的路径
import { Color } from "color";
import { View } from "ui/core/view";

import { setHintColor } from "../../utils/hint-util";

@Component({
  selector: "my-app",
  providers: [UserService], // 服务，数组中的服务会被当成私有属性注入到被修饰的类的构造器里。
  templateUrl: "pages/login/login.html", // 模板html，也可以内联。
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"], // 样式
})
export class LoginComponent implements OnInit {

  user: User;
  isLoggingIn = true;
  @ViewChild("container") container: ElementRef; // 连线儿呢...
  @ViewChild("email") email: ElementRef;
  @ViewChild("password") password: ElementRef;

  // 构造器，在这里实例化上面声明的属性
  // 如果属性作为参数，代表声明，实例化工作交给外部：包括依赖注入（typescript构造器语法）
  // router不需要在这个组件的providers进行注入，原因是已经在上层的app.module.ts里import了。
  // page 不需要注入，原因是太常用，nativescript已经全局自动注入了。
  constructor(private userService: UserService, private router: Router, private page: Page) {
    this.user = new MockUser();
  }

  // 生命周期钩子，初始化时调用。
  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  setTextFieldColors() {
    const emailTextField = <TextField>this.email.nativeElement;
    const passwordTextField = <TextField>this.password.nativeElement;

    const textColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
    emailTextField.color = textColor;
    passwordTextField.color = textColor;

    const hintColor = new Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
    setHintColor({ view: emailTextField, color: hintColor });
    setHintColor({ view: passwordTextField, color: hintColor });
  }

  submit() {
    // alert("You’re using: " + this.user.email);
    if (!this.user.isValidEmail()) {
      alert("邮箱地址无效...");
      return;
    }
    if (this.isLoggingIn) {
      this.signIn();
    } else {
      this.signUp();
    }
  }

  signIn() {
    const onSuccess = () => {
      this.router.navigate(["/list"]);
    };
    const onFailure = (err: Response) => {
      const message = err.json().errorCode === 205 ? "用户名或密码错误" : "";
      alert("登录失败，请检查输入~，原因：" + message);
    };
    this.userService.login(this.user).subscribe(onSuccess, onFailure);
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
    this.setTextFieldColors();
    const container = <View>this.container.nativeElement; // 强转成View
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
      duration: 400,
    });
  }

}