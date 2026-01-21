import YAML from 'yaml';
import cfg from '../../../../lib/config/config.js';
import makeConfig from '../../../../lib/plugins/config.js';
import path from 'node:path';
import fs from 'node:fs/promises';
import { PluginName, ResPath } from '../dir.js';
class Config {
    plugin_name = PluginName;
    config = {};
    configSave = async () => { };
    /** 初始化配置 */
    async initCfg() {
        this.config = YAML.parse(await fs.readFile(path.join(ResPath, 'config', 'config.yaml'), 'utf8'));
        /** 保留注释 */
        const keep = {};
        for (const i in this.config) {
            keep[i] = {};
            for (const j in this.config[i]) {
                if (j.endsWith('Tips')) {
                    keep[i][j] = this.config[i][j];
                }
            }
        }
        const { config, configSave } = await makeConfig(this.plugin_name, this.config, keep, {
            replacer: (i) => i.replace(/(\n.+?Tips:)/g, '\n$1')
        });
        this.config = config;
        this.configSave = configSave;
        return this;
    }
    /** 主人列表 */
    get masterQQ() {
        return cfg.masterQQ;
    }
    /** TRSS的主人列表 */
    get master() {
        return cfg.master;
    }
    get test() {
        return this.config.test;
    }
    /**
     * 群配置
     * @param groupId 群号
     * @param botId 机器人账号
     */
    getGroup(groupId = '', botId = '') {
        return Array.isArray(Bot.uin) ? cfg.getGroup(botId, groupId) : cfg.getGroup(groupId);
    }
    /**
     * 修改设置
     * @param name 配置名
     * @param key 修改的key值
     * @param value 修改的value值
     */
    modify(name, key, value) {
        if (typeof this.config[name] !== 'object') {
            this.config[name] = {};
        }
        this.config[name][key] = value;
        return this.configSave();
    }
    /**
     * 修改配置数组
     * @param name 文件名
     * @param key key值
     * @param value value
     * @param category 类别 add or del
     */
    modifyarr(name, key, value, category = 'add') {
        if (typeof this.config[name] !== 'object')
            this.config[name] = {};
        if (!Array.isArray(this.config[name][key]))
            this.config[name][key] = [];
        if (category === 'add') {
            if (!this.config[name][key].includes(value))
                this.config[name][key].push(value);
        }
        else {
            this.config[name][key] = this.config[name][key].filter((item) => item !== value);
        }
        return this.configSave();
    }
}
export default await new Config().initCfg();
