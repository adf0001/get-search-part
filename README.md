# get-search-part
get part value by name from window.location.search

# Install
```
npm install get-search-part
```

# Usage & Api
```javascript

var get_search_part = require("get-search-part");

//get_search_part(name [, searchString] )
get_search_part('a', '?aa=1&a=2') === '2' &&
get_search_part('aa', '?aa=1&a=2') === '1' &&
get_search_part('a', '?aa=1&a=2&cc=3') === '2' &&
get_search_part('d', '?aa=1&a=2&cc=3') === null

```
