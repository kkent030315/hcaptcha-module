import Vue from 'vue'

export interface HCaptchaOptions {
  siteKey: string
}

export interface HCaptchaInstance {
  options: HCaptchaOptions
  destroy(): void
  init(): Promise<any>
}

declare module 'vue/types/vue' {
  interface Vue {
    $hcaptcha: HCaptchaInstance
  }
}