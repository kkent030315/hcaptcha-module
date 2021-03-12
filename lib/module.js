"use strict";

const { resolve } = require("path");

module.exports = function (moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.hcaptcha,
  };

  this.addPlugin({
    fileName: "hcaptcha.js",
    options,

    src: resolve(__dirname, "plugin.js"),
  });

  this.addTemplate({
    fileName: "hcaptcha.vue",
    src: resolve(__dirname, "hcaptcha.vue"),
  });
};

module.exports.meta = require("../package.json");
