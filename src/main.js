import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
// console.log(ViewUI);
import axios from "./utils/request"
const app = createApp(App)
app.config.globalProperties.$axios = axios

app.use(store).use(router).mount('#app')
