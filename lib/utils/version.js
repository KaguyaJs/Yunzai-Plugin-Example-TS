import Data from './data.js';
const yunzaiPackage = await Data.readJSON('package.json', 'yunzai');
const pluginPackage = await Data.readJSON('package.json', 'plugin');
const yunzaiVer = yunzaiPackage.version;
const pluginVer = pluginPackage.version;
const pluginName = pluginPackage.name;
let yunzaiName = 'Yunzai';
let isTRSS = false;
let isMiao = false;
if (Array.isArray(Bot.uin)) {
    yunzaiName = 'TRSS-Yunzai';
    isTRSS = true;
}
else if (yunzaiPackage.name === 'miao-yunzai') {
    yunzaiName = 'Miao-Yunzai';
    isMiao = true;
}
else {
    yunzaiName = yunzaiPackage.name;
    throw new Error(`不支持的Yunzai版本: ${yunzaiName}`);
}
export default {
    yunzaiName,
    pluginName,
    yunzaiVer,
    pluginVer,
    get ver() {
        return pluginVer;
    },
    isMiao,
    isTRSS,
    yunzaiPackage,
    pluginPackage
};
