import { createApp } from 'vue'
import App from './App.vue'
import registerComponents from "./register-components"

// Icons
import '@mdi/font/css/materialdesignicons.css'

// Fonts
// import "@assets/fonts/gilroy/style.css"
// import "@assets/style/style.css"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



const vuetify = createVuetify({
    components,
    directives,
})

// import Inputmask from 'inputmask'
import { createPinia } from 'pinia'
import {router} from "@/app/router";

const app = createApp(App)
app.use(createPinia());
app.use(registerComponents);

// selected



app.use(vuetify);
app.use(router);
// app.directive('mask', (el, binding) => {
//     Inputmask(binding.value).mask(el);
// })
app.mount('#app');
