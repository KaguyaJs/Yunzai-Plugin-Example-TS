export class tasks extends plugin {
  constructor () {
    super({
      task: {
        name: '每天中午问好',
        cron: '0 30 12 * * *',
        fnc: () => {
          // 给指定用户发送一条问好消息
          Bot.pickFriend(12345678).sendMsg('中午好~')
        }, // 定时任务触发时执行的函数
        log: true // 可选是否显示执行日志
      }
    })
  }
}
