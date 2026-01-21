import config from '../config/index.js';
export class example extends plugin {
    constructor() {
        super({
            name: '打招呼',
            dsc: '向用户问好',
            event: 'message', // 监听的事件类型
            priority: 5000,
            rule: [
                {
                    reg: '^#测试$', // 满足正则的消息才会触发
                    fnc: 'SayHello',
                    log: true
                },
            ],
        });
    }
    async SayHello() {
        // 回复文本消息
        this.e.reply('这是一条文本消息');
        // 图片消息
        this.e.reply(segment.image('https://ciallo.kaguya.fan/?name=丛雨'));
        // 发送一条艾特消息
        this.e.reply(segment.at(1008611));
        // 组合发送
        this.e.reply([
            segment.at(this.e.user_id),
            '早上好\n', // 使用 \n 进行文本换行
            '今天也要开开心心的过呀',
            segment.image('https://t.alcy.cc/xhl')
        ]);
        // 回复并引用消息添加at，然后在五秒之后撤回
        this.e.reply('Ciallo～(∠・ω<)⌒☆', true, {
            at: true,
            recallMsg: 5 // 5 秒后撤回
        });
        this.e.reply(`你好，我的名字是${config.test.name}, 我今年刚满${config.test.age}岁`);
        // 阻止命令继续向下执行
        return true;
    }
}
