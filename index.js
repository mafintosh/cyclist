var Cyclist = function(size) {
	if (!(this instanceof Cyclist)) return new Cyclist(size);
	this.mask = size-1;
	this.size = size;
	this.values = new Array(size);
};

Cyclist.prototype.put = function(index, val) {
	var pos = index & this.mask;
	this.values[pos] = val;
	return pos;
};

Cyclist.prototype.get = function(index) {
	return this.values[index & this.mask];
};

Cyclist.prototype.del = function(index) {
	var pos = index & this.mask;
	var val = this.values[pos];
	this.values[pos] = undefined;
	return val;
};

module.exports = Cyclist;