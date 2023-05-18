declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.json' {
  const value: { [key: string]: any }
  export default value
}

declare module 'vue-inputmask'
