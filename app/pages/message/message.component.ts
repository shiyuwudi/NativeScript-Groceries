/**
 * Created by barney on 2017/6/9.
 */
import { Component, ElementRef, OnInit, ViewChild, NgZone } from "@angular/core";
import { Message } from "../../shared/message/message";
import { MessageListService } from "../../shared/message/message-list.service";
import {
    getNumber,
    setNumber,
} from "application-settings";

@Component({
    moduleId: module.id, // 加这个，以下路径为相对路径
    selector: "message",
    templateUrl: "./message.html",
    styleUrls: ["./message-common.css", "./message.css"],
    providers: [MessageListService],
})
export class MessageComponent implements OnInit {
    private count = 1;
    private messageList: Message[] = []; // 数据源
    public constructor(private messageListService: MessageListService) {}
    // OnInit 必须实现
    public ngOnInit() {
        this.getList();
    }
    getList() {
        this.messageListService.getMessageList({beginCount: "0", selectCount: this.count*20, flag: "true"}).subscribe(
                    (json) => {
                                json.msg_list.forEach((message) => {
                                    this.messageList.push(new Message(message.fromUser, message.addTime, message.content));
                                    setNumber("messageCount", 0);
                                });
                            }
                );
    }
    loadMoreItems() {
        // Load more items here.
        this.count += 1;
        this.getList();
    }
}
