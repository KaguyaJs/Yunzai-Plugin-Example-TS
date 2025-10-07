import { fileURLToPath } from 'node:url'
import { join, dirname, basename } from 'node:path'

/** Yunzai本体的绝对路径 */
export const Path = process.cwd()
/** 插件路径 */
export const PluginPath = join(dirname(fileURLToPath(import.meta.url)), '..').replace(/\\/g, '/')
/** 源码目录 */
export const RootDir = join(PluginPath, 'src')
/** 编译输出目录 */
export const libDir = join(PluginPath, 'lib')
/** Apss目录 */
export const AppsDir = join(dirname(fileURLToPath(import.meta.url)), 'apps').replace(/\\/g, '/')
/** 插件名称 */
export const PluginName = basename(PluginPath)
/** 插件资源存放目录 */
export const ResPath = join(PluginPath, 'resources')
