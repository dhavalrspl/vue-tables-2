"use strict";

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

module.exports = function (h, that) {

  if (!that.opts.footerHeadings) return '';

  var footerHeadings = [];

  if (that.opts.footerHeadings) {

    var columns = that.allColumns;

    columns.map(function (column) {
      if (that.opts.footerHeadings[column]) {
        footerHeadings.push(h("th", {}, [h("span", { "class": "VueTables__heading" }, [that.getFooterHeading(column, h)])]));
      } else {
        footerHeadings.push(h("th"));
      }
    });
  }

  return h("tfoot", null, [h("tr", null, [footerHeadings])]);
};