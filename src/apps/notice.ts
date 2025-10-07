export class example1 extends plugin<'notice.group.increase'> {
  constructor () {
    super({
      name: '进群欢迎',
      dsc: '新成员进群欢迎',
      event: 'notice.group.increase'
    })
  }

  /** 接受到事件都会执行一次 */
  async accept () {
    if (this.e.user_id === this.e.self_id) return

    /** 定义入群欢迎内容 */
    const msg = '欢迎新人！'
    /** 冷却cd 30s */
    const cd = 30

    /** cd */
    const key = `Yz:newcomers:${this.e.group_id}`
    if (await redis.get(key)) return
    redis.set(key, '1', { EX: cd })

    /** 回复 */
    await this.reply([
      segment.at(this.e.user_id),
      segment.image('https://t.alcy.cc/xhl'),
      msg,
    ])
  }
}
