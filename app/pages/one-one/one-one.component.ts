import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {action} from "ui/dialogs";

import { UserService } from "../../shared/user/user.service";
import { User, ZhenTing, MuSiWen, ShiYu } from "../../shared/user/user";
import { Logger } from "../../service/logger.service";
import { NetworkService } from "../../service/main.service";

@Component({
  moduleId: module.id,
  selector: "one-one",
  templateUrl: "./one-one.component.html",
})

export class OneOneComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private logger: Logger,
    private net: NetworkService,
    ) {}
  public ngOnInit() {
    // 搞点大事情
  }
  public testLogin() {
    this.userService.getLifeBuyList().subscribe();
  }
  public logout() {
    const currentUser = UserService.getCurrentUser();
    if (!currentUser) {
      alert("退你妹");
    } else {
      this.userService.logout();
      alert("成功退出");
    }
  }
  public showLogin() {
    const currentUser = UserService.getCurrentUser();
    if (!currentUser) {
      const actions = ["甄婷", "牟斯文", "石宇"];
      const users = [new ZhenTing(), new MuSiWen(), new ShiYu()];
      const options = {
        title: "登什么录？",
        message: "你要怎么登录？？",
        cancelButtonText: "不登了，逗你玩呢",
        actions,
      };
      action(options).then((result) => {
        const i = actions.indexOf(result);
        if (i !== -1) {
          const user = users[i];
          this.userService.login(user).subscribe();
        }
      });
    } else {
      alert(`${currentUser.username}已经登录了!`);
    }
  }
}
