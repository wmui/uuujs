declare namespace uuujs {
    /**
     * 添加Class
     * @param element DOM元素
     * @param cls className
     */
    export function addClass(element: HTMLElement, cls: string)

    /**
     * 向网页中动态添加脚本
     * @param url 要加载的资源地址
     * @param callback 资源加载完毕后的回调
     */
    export function addScript(url: URL, callback?: () => void): void

    /**
     * 动画
     * @param from 起始位置
     * @param to 结束位置
     * @param name 动画名称
     * @param callback 返回当前帧的位置数据和是否到达结束位置
     */
    export function animation(from: number, to: number, name: string, callback: (currentPosition: number, isEnd: boolean) => void)

    /**
     * 按照size把数组分割成二维数组
     * @param array 原始数组
     * @param size 二维数组的大小
     */
    export function chunk(array: any[], size: number): any[]

    /**
     * 提取对象到一个数组中
     * @param array 对象数组
     * @param str 数组中对象的字段名
     */

    export function flatArray(array: any[], str): any[]
    /**
     * 对函数进行防抖处理
     * @param method 要防抖的函数
     * @param context 绑定上下文
     */
    export function debounce(method: () => void, context?: any): void

    /**
     * 支持常见数据类型的深拷贝(Array、Object、Date、其他原始类型数据)
     * @param data 深拷贝数据
     */
    export function deepClone(data: any): any

    /**
     * 时间格式化
     * @param timestamp 时间戳
     * @param format 时间格式：yyyy-MM-dd hh:mm:ss。分隔符可以自定义
     */
    export function formatDate(timestamp: number | string, format: string): string

    /**
     * 获取对象的属性值
     * @param obj 要获取属性的对象
     * @param path 对象的路径
     * @param defaultValue 属性不存在时返回的默认值，默认是undefined
     */
    export function get(obj: object, path: string, defaultValue:any): any

    /**
     * 获取cookie值，默认返回空字符串
     * @param name cookie的键名
     */
    export function getCookie(name: string): string

    /**
     * 获取浏览器名称和版本号
     */
    export function getExplore(): string

    /**
     * 获取操作系统名称，可能值：mac、windows、linux、android、ios、windowsPhone
     */
    export function getOS(): string


    /**
     * 把函数包装为单例模式
     * @param method 函数
     */
    export function getSingle(method): () => any

    /**
     * 获取指定范围的随机数
     * @param min 最小值
     * @param max 最大值
     */
    export function getRandom(min: number, max: number): number


    /**
     * 获取数据类型，可能的值：String Number Boolean Null Undefined Object Symbol Function Array Date RegExp Error HTMLDocument Window Set Map
     */
    export function getType(data: any): string

    /**
     * 判断元素是否有指定类名
     * @param element DOM元素
     * @param cls className
     */
    export function hasClass(element: HTMLElement, cls: string): boolean

    /**
     * 判断是否是空数据（
     * true值：[]、{}、new Set()、new Map()、null、undefined、''
     * false值：0、false
     * @param data 数据值
     */
    export function isEmpty(data: any): boolean

    /**
     * jsonp请求
     * @param url jsonp地址
     * @param data 附加的data参数
     */
    export function jsonp(url: URL, data?: object): Promise<any>

    /**
     * 获取元素距离document的绝对距离
     * @param element DOM元素
     */
    export function offset(element: HTMLElement): {left: number, top: number}

    /**
     * 解析url
     * @param url url地址·
     */
    export function parseUrl(url: URL): object

    /**
     * 移除class类名
     * @param element DOM元素
     * @param cls 要移除的className
     */
    export function removeClass(element: HTMLElement, cls: string):void

    /**
     * 移除cookie
     * @param name cookie的键名
     */
    export function removeCookie(name: string):void

    /**
     * 设置cookie
     * @param name cookie的键名
     * @param value cookie的值
     * @param days cookie的有效期
     */
    export function setCookie(name: string, value: string, days: number): void

    /**
     * 向剪切板添加数据
     * @param text 添加到剪切板的文本数据
     * @param callback 复制成功后的回调函数
     */

    export function setClipboardData(text: string, callback?: () => void): void
    /**
     * 对函数进行节流处理
     * @param method 要节流处理的函数
     * @param context 绑定的上下文环境，默认window
     */
    export function throttle(method: () => void, context?: any): void

}


declare module 'uuujs' {
    export = uuujs
}
