import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from "@vueuse/head"

import './assets/main.css'
import router from "./router/index"


const app = createApp(App);

app.use(router);
const head = createHead()
app.use(head)

app.mount("#app");

