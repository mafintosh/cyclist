# Circular

Circular is an efficient circular buffer implemention in Javascript.
It is available through npm

	npm install circular

## Usage

``` js
var circular = require('circular');
var buf = circular(4); // the size of the buffer should be a 2 magnitude
                       // this buffer can now hold 4 elements in total

buf.put(42, 'hello 42'); // store something and index 42
buf.put(43, 'hello 43'); // store something and index 43

console.log(buf.get(42)); // prints hello 42
console.log(buf.get(46)); // prints hello 42
```

You can use `.fit(minElementsCount)` to make sure the buffer can fit a certain
amount of elements after it has been created.

``` js
buf.fit(16); // buf can now hold at least 16 elements
```

## API

* `circular(minSize)` creates a new buffer
* `circular#get(index)` get an object stored in the buffer
* `circular#put(index,value)` insert an object into the buffer
* `circular#del(index)` delete an object from an index
* `circular#fit(minSize)` resize the buffer if size is less than minSize
* `circular#size` property containing current size of buffer

## License

MIT