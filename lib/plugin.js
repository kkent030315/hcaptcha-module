import { EventEmitter } from "events";
import Vue from "vue";

const API_URL = "https://hcaptcha.com/1/api.js";

class HCaptcha {
  constructor({ siteKey }) {
    if (!siteKey) {
      throw new Error("hCaptcha Error: No siteKey specified");
    }

    this._elements = {};
    this.siteKey = siteKey;
    this._ready = false;
    this._eventBus = null;
  }

  init() {
    if (this._ready) {
      return this._ready;
    }

    this._eventBus = new EventEmitter();
    this._elements = {
      script: document.createElement("script"),
    };

    const { script } = this._elements;

    script.setAttribute('src', `${API_URL}`)
    script.setAttribute("async", "");
    script.setAttribute("defer", "");

    this._ready = new Promise((resolve, reject) => {
      document.head.appendChild(script);
    });

    return this._ready;
  }

  getResponse() {
    return new Promise((resolve, reject) => {
      /**
       * The hCaptcha challenge response
       * which must be validated in server side
       */
      resolve(
        document
          .querySelector("[data-hcaptcha-response]")
          .getAttribute("data-hcaptcha-response")
      )
    })
  }

  on(event, callback) {
    return this._eventBus.on(event, callback);
  }

  destroy() {
    if (this._ready) {
      this._ready = false;

      const { head } = document;
      const { style } = this._elements;

      const scripts = [
        ...document.head.querySelectorAll("script"),
      ].filter((script) => script.src.includes("hcaptcha"));

      if (scripts.length) {
        scripts.forEach((script) => head.removeChild(script));
      }

      if (head.contains(style)) {
        head.removeChild(style);
      }
    }
  }
}

export default function (_, inject) {
  const { hcaptcha = {} } = _.$config || {}
  const options = {
    ...<%= serialize(options) %>,
    ...hcaptcha,
  }

  Vue.component('Hcaptcha', () => import('./hcaptcha.vue'))
  inject('hcaptcha', new HCaptcha(options))
}