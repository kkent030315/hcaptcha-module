<template>
  <div class="h-captcha" :data-sitekey="siteKey || $hcaptcha.siteKey"></div>
</template>

<script>
export default {
  props: {
    siteKey: {
      type: String,
      default: "",
    },
  },
  beforeDestroy() {
    this.$hcaptcha.destroy();
  },
  mounted() {
    this.$hcaptcha.init();
  },
};
</script>