/*
   * Tween.js
   * t: current time（当前时间）；
   * b: beginning value（初始值）；
   * c: change in value（变化量）；
   * d: duration（持续时间）。
   * you can visit 'http://easings.net/zh-cn' to get effect
   */
var Tween = {
    Linear: function (t, b, c, d) {
        return c * t / d + b
    },
    Quad: {
        easeIn: function (t, b, c, d) {
            return c * (t /= d) * t + b
        },
        easeOut: function (t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b
        },
        easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b
            return -c / 2 * ((--t) * (t - 2) - 1) + b
        }
    },
    Cubic: {
        easeIn: function (t, b, c, d) {
            return c * (t /= d) * t * t + b
        },
        easeOut: function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b
        },
        easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b
            return c / 2 * ((t -= 2) * t * t + 2) + b
        }
    },
    Quart: {
        easeIn: function (t, b, c, d) {
            return c * (t /= d) * t * t * t + b
        },
        easeOut: function (t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b
        },
        easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b
        }
    },
    Quint: {
        easeIn: function (t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b
        },
        easeOut: function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b
        },
        easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
        }
    },
    Sine: {
        easeIn: function (t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
        },
        easeOut: function (t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b
        },
        easeInOut: function (t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
        }
    },
    Expo: {
        easeIn: function (t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
        },
        easeOut: function (t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
        },
        easeInOut: function (t, b, c, d) {
            if (t == 0) return b
            if (t == d) return b + c
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
        }
    },
    Circ: {
        easeIn: function (t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
        },
        easeOut: function (t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
        },
        easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
        }
    },
    Elastic: {
        easeIn: function (t, b, c, d, a, p) {
            var s
            if (t == 0) return b
            if ((t /= d) == 1) return b + c
            if (typeof p === 'undefined') p = d * 0.3
            if (!a || a < Math.abs(c)) {
                s = p / 4
                a = c
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a)
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
        },
        easeOut: function (t, b, c, d, a, p) {
            var s
            if (t == 0) return b
            if ((t /= d) == 1) return b + c
            if (typeof p === 'undefined') p = d * 0.3
            if (!a || a < Math.abs(c)) {
                a = c
                s = p / 4
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a)
            }
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b)
        },
        easeInOut: function (t, b, c, d, a, p) {
            var s
            if (t == 0) return b
            if ((t /= d / 2) == 2) return b + c
            if (typeof p === 'undefined') p = d * (0.3 * 1.5)
            if (!a || a < Math.abs(c)) {
                a = c
                s = p / 4
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a)
            }
            if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b
        }
    },
    Back: {
        easeIn: function (t, b, c, d, s) {
            if (typeof s === 'undefined') s = 1.70158
            return c * (t /= d) * t * ((s + 1) * t - s) + b
        },
        easeOut: function (t, b, c, d, s) {
            if (typeof s === 'undefined') s = 1.70158
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
        },
        easeInOut: function (t, b, c, d, s) {
            if (typeof s === 'undefined') s = 1.70158
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
        }
    },
    Bounce: {
        easeIn: function (t, b, c, d) {
            return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b
        },
        easeOut: function (t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b
            }
        },
        easeInOut: function (t, b, c, d) {
            if (t < d / 2) {
                return Tween.Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b
            } else {
                return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
            }
        }
    }
}

/**
 * from  起始位置
 * to 结束位置
 * name 动画名字
 * callback 每帧结束后的回掉函数，返回当前的位置
 */
var animation = function (options = {}, callback = () => { }) {

    var { from = 0, to = 0, duration = 300, name = 'Linear' } = options
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (fn) {
            return setTimeout(fn, 17)
        }
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id)
        }
    }

    // 算法需要的几个变量
    var start = 0
    // during根据设置的总时间计算
    var during = Math.ceil(duration / 17)
    // 动画请求帧
    var req = null
    // name = name.slice(0, 1).toUpperCase() + name.slice(1)
    var arrKeyTween = name.split('.')
    var fnGetValue

    if (arrKeyTween.length == 1) {
        fnGetValue = Tween[arrKeyTween[0]]
    } else if (arrKeyTween.length == 2) {
        fnGetValue = Tween[arrKeyTween[0]] && Tween[arrKeyTween[0]][arrKeyTween[1]]
    }

    // 运动
    var step = function () {
        var value = fnGetValue(start, from, to - from, during)
        start++
        if (start <= during) {
            callback(value, false)
            req = requestAnimationFrame(step)
        } else {
            callback(to, true)
        }
    }
    // 开始执行动画
    step()

    return function () {
        return req
    }
}


module.exports = animation
