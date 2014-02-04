# npgk resolve

> Resolve full paths, given an `npkg` style name

## install

```bash
$ npm install --save lib-npkg-resolve
```

## usage

```javascript
var npkg_resolve = require('lib-npkg-resolve');

process.cwd()
// /Users/jacob/projects

npkg_resolve('asdf')
// /Users/jacob/lib/node_modules/asdf

npkg_resolve('./xyz')
// /Users/jacob/projects/xyz
```
