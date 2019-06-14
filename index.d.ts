declare namespace uuu {
    /**
     * 获取指定范围的随机数
     * @param min 最小值
     * @param max 最大值
     */
    export function getRandom(min: number, max: number): number

    /**
     * 向网页中动态添加脚本
     * @param url 要加载的资源地址
     * @param callback 资源加载完毕后的回调
     */
    export function addScript(url: URL, callback?: () => void): void;

    /**
     * 对函数进行节流处理
     * @param method 要节流处理的函数
     * @param context 绑定的上下文环境，默认window
     */
    export function throttle(method: () => void, context = window): void;

    /**
     * 判断元素是否有指定类名
     * @param element DOM元素
     * @param cls className
     */
    export function hasClass(element: HTMLElement, cls: string): boolean;
}
