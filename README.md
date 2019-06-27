## UUUJS

[![Build Status](https://travis-ci.org/wmui/uuujs.svg?branch=master)](https://travis-ci.org/wmui/uuujs)
[![Coverage Status](https://coveralls.io/repos/github/wmui/uuujs/badge.svg?branch=master)](https://coveralls.io/github/wmui/uuujs?branch=master)
[![LICENSE MIT](https://img.shields.io/npm/l/uuujs.svg)](https://www.npmjs.com/package/uuujs)

> uuujs - 无依赖前端工具函数库

## 使用方式

uuujs支持在浏览器环境和node环境中使用

### 浏览器环境

[uuu.min.js](https://github.com/wmui/uuujs/blob/master/dist/uuu.min.js)

```html
<script src="uuu.min.js"></script>

<script>
    var t = uuu.getType({}); // Object
</script>
```

或者

```js
import uuu from 'uuujs';

console.log(uuu.getType({})); // Object
```

### Node环境

```js
// 完整引入
const uuu = require('uuujs');

// 部分引入
const getType = require('uuujs/getType');
```

## TS支持

已添加类型声明文件，函数都有详细注释

**注意：** 函数的测试用例还在不断添加中，争取覆盖率做到80%以上
