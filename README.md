# react-tabs

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Tooltip component.

## Usage

Wrap Tooltip over component or element you want to make tooltip appears on hovering this element.

```javascript

import { Tooltip } from  "@crpt/react-tooltip";


<Tooltip position="bottom" content={<div>Whaaat?</div>}>
  <div>HOVER MEEEE</div>
</Tooltip>
```

| PropName | Description | Example |
|---|---|---|
| position: String(required) | Tooltip position. | <Tooltip position="bottom" content={<div>I am tooltip content</div>} /> |
| content: Any(required) | Any content you want to see in tooltip. | <Tooltip position="bottom" content={<div>I am tooltip content</div>} /> |


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
