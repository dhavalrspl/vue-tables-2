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

    // var columns = that.allColumns;

    that.opts.footerHeadings.map(function (column) {
      // footerHeadings.push(h(
      //   "th",
      //   {
      //     on: {
      //       click: that.orderByColumn.bind(that, column)
      //     },
      //     "class": that.sortableClass(column) },
      //   [h(
      //     "span",
      //     { "class": "VueTables__heading" },
      //     [that.getHeading(column)]
      //   ), h(
      //     "span",
      //     _defineProperty({
      //       directives: [{
      //         name: "show",
      //         value: that.sortable(column)
      //       }],

      //       "class": "VueTables__sort-icon pull-right"
      //     }, "class", that.sortableChevronClass(column)),
      //     []
      //   )]
      // ));

      /**
       * Modify by Dhaval Patel
       * Date: 28-Aug-2017
       * 
       * To Make it fixed footer row.
       */
      footerHeadings.push(h("th", {}, [h("span", { "class": "VueTables__heading" }, [that.getHeading(column)]), h("span", _defineProperty({
        directives: [{
          name: "show"
        }]

      }, "class", that.sortableChevronClass(column)), [])]));
    });
  }

  return h("tfoot", null, [h("tr", null, [footerHeadings])]);
};