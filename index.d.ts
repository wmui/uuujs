declare namespace uuu {
    /**
     * @desc 生成指定范围[min, max]的随机数
     * @param  {Number} min
     * @param  {Number} max
     * @return {Number}
   */
    export function random(min: number, max: number): number

    /**
     * @desc 向网页中动态添加脚本
     * @param url 要加载的资源地址
     * @param callback 资源加载完毕后的回调
     */
    export function addScript(url: string, callback?: function): void;
}
