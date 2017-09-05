'use strict';

var _ucfirst = require('../helpers/ucfirst');

var _ucfirst2 = _interopRequireDefault(_ucfirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (value, h) {

	if (typeof value !== 'string') return '';

	if (this.$scopedSlots && typeof this.$scopedSlots['h__' + value] !== 'undefined') {
		return this.$scopedSlots['h__' + value]();
	}

	var derivedHeading = (0, _ucfirst2.default)(value.split("_").join(" "));

	if (!this.opts.footerHeadings.hasOwnProperty(value)) return derivedHeading;

	if (typeof this.opts.footerHeadings[value] === 'function') {
		if (h) return this.opts.footerHeadings[value].call(this.$parent, h);

		return derivedHeading;
	}

	return this.opts.footerHeadings[value];
};