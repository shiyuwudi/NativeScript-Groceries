// tslint:disable no-console
 export class Logger {
   private messages: Array<{ msg: string, date: Date }> = [];
   public log(msg: string) {
      console.log(`\n======= jing-lian-meng log: ${msg} =======\n`);
      const date = new Date();
      this.messages.push({msg, date});
    }
   public error(msg: string) {
     console.error(`\n======= jing-lian-meng log: ${msg} =======\n`);
     const date = new Date();
     this.messages.push({msg, date});
   }
   public getMessageRecord() {
      return this.messages;
   }
 }
