# NextJs Framework
A Simple and Lightweight JavScript Framework.

## Contents
- [Demo](#demo)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Free vs Premium](#free-vs-premium)
- [Support](#support)
- [Release Notes](#release-notes)
- [License](#license)

## Demo
For usage and examples, have a look at :rocket: [online demo]()

## Installation

1. Download the installable nextJs zip.
2. Create index.html file and paste the code.


## Quick Start
1. Create index.html file and paste the code.
```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <div class="app"></div>

        <script src="js/nextJs.js"></script>
        <script src="js/script.js"></script>
    </body>

</html>
```
2. Create Js file `script.js` and start coding here.
```js
let $prefix = 'app-';

nJs.el( document.querySelector('.app'),
    'div',
    {
        class: $prefix+'top-div',
        content: 'Top Div'
    },
    [

    ],
    'after'
);
```
<h3>use the other method</h3>

```js
var nJs = {
    el: NextExt.createElement,
    parents: NextExt.instance().getParents,
    parent: NextExt.instance().getParent,
    getClass: NextExt.instance().getClass,
    addClass: NextExt.instance().addClass,
    removeClass: NextExt.instance().removeClass,
    toggleClass: NextExt.instance().toggleClass,
    getAttr: NextExt.instance().getAttr,
    setAttr: NextExt.instance().setAttr,
    checkAttr: NextExt.instance().checkAttr,
    append: NextExt.instance().appendEle,
    after: NextExt.instance().afterEle,
    before: NextExt.instance().beforeEle,
    addElement: NextExt.instance().addElement,
    find: NextExt.instance().find,
    ajax: NextExt.instance().ajaxRequest,
    get: NextExt.instance().getRequest,
    post: NextExt.instance().postRequest,
    json: NextExt.instance().getJson,
    jsonToStr: NextExt.instance().jsonToStr,
    strToJson: NextExt.instance().strToJson,
};
console.log(nJs);
```

## Support

We are provide [support forum]() for premium version users. You can join to support forum for submit any question after purchasing. Free version users support is limited on [github]().

## Release Notes
Check out the [release notes]()

## License
NextJs Framework have two different version. Free version has limited features and offers only admin option panel feature.  This framework is licensed 100% GPL.
