import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
// import { VueRecaptchaPlugin } from 'vue-recaptcha'
const app = createApp(App);

app.use(router);
app.mount('#app')
