<p align="center">
    <img alt="License" src="https://img.shields.io/github/license/kkent030315/hcaptcha-module?style=for-the-badge" />
    <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/kkent030315/hcaptcha-module?style=for-the-badge">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/hcaptcha?style=for-the-badge">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/hcaptcha-nuxt?style=for-the-badge">
</p>

# hcaptcha-module
hCaptcha integration with Nuxt.js

# Usage

1. Install

```bash
npm i hcaptcha-nuxt
```

or using `yarn`

```bash
yarn add hcaptcha-nuxt
```

2. Add `hcaptcha-nuxt` module in `nuxt.config.js`

```js
export default {
    modules: [
        "hcaptcha-nuxt"
    ],
}
```

3. Specify your site key in `nuxt.config.js`

```js
export default {
    hcaptcha: {
        siteKey: process.env.HCAPTCHA_SITE_KEY || ''
    }
}
```

4. Add `<hcaptcha>` component in `your-component.vue`

```html
<template>
    <div>
        <hcaptcha />
    </div>
</template>
```

5. You are ready to go. get the response and send it to the server then validate it

In `your-component.vue`

```html
<script>
export default {
    methods: {
        onSubmit() {
            const hcaptcha_response = this.$hcaptcha.getResponse()
        }
    }
}
</script>
```

# Local Development

For local development, as modern browsers have strict CORS CORB,  
hCaptcha will not work on `file://somewhere` either `localhost`

add `127.0.0.1 your.domain.com` to the `hosts` to prevent this.

- `/etc/hosts` on Linux,
- `/private/hosts` on OSX,
- `%SystemRoot%/System32/drivers/etc/hosts` on Windows.

# License

MIT