# Yunzai TS插件示例

## 开发必备

- [VSCode](https://code.visualstudio.com/)
- Node.js v23+
- npm + pnpm
- git
- ESLint拓展(推荐)

## 开发流程

1. 克隆[Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai)或[TRSS-Yunzai](https://github.com/TimeRainStarSky/Yunzai)到本地
2. 将本仓库或以本仓库为模板创建的仓库克隆至Yunzai的plugins文件夹下，名称随意
3. 使用`pnpm install`安装生产及开发依赖
4. 编写代码然后修改package文件内包名和版本号
5. 运行`pnpm run build`构建源码
6. 返回Yunzai目录`node app`调试功能
7. 测试完成，提交代码

## 项目结构

```
yunzai-plugin-example/
  ├── src/                  -> 源码目录
  │ ├── apps/               -> 功能实现
  │ ├── config/             -> 配置管理
  │ ├── utils/              -> 工具类
  │ │   ├── data.ts         -> 数据工具
  │ │   └── version.ts      -> 版本管理 
  │ │── modules/            -> 其他模块
  │ │   └── loader/         -> 插件载入模块
  │ ├── types/              -> 类型声明
  │ │   └── Config.ts       -> 配置文件的类型声明
  │ ├── index.ts            -> 入口文件
  │ └── dir.ts              -> 路径管理
  │ 
  ├── lib/                  -> 输出目录
  ├── resources/            -> 资源目录
  │ └── config/
  │   └── config.json       -> 默认配置文件
  ├── index.js              -> Yunzai入口文件
  ├── tsconfig.json         -> ts配置
  ├── eslint.config.js      -> ESLint规则配置
  ├── package.json
  └── README.md
```

