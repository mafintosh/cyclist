var Circular = function(size) {
	if (!(this instanceof Circular)) return new Circular(size);
	this.mask = 0;
	this.values = [];
	this.indexes = [];
	if (size) this.fit(size);
};

Circular.prototype.__defineGetter__('size', function() {
	return this.mask + 1;
});

Circular.prototype.put = function(index, val) {
	var pos = index & this.mask;
	this.indexes[pos] = index;
	this.values[pos] = val;
};

Circular.prototype.get = function(index) {
	return this.values[index & this.mask];
};

Circular.prototype.del = function(index) {
	var pos = index & this.mask;
	var val = this.values[pos];
	this.indexes[pos] = this.values[pos] = undefined;
	return val;
};

Circular.prototype.fit = function(size) {
	if (size <= this.size) return;
	while (this.size < size) this.mask = 2 * (this.mask + 1) - 1;

	var values = this.values;
	var indexes = this.indexes;
	this.values = [];
	this.indexes = [];

	for (var i = 0; i < indexes.length; i++) {
		if (indexes[i] !== undefined) this.put(indexes[i], values[i]);
	}
};

module.exports = Circular;