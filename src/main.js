import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/base.css'
import List from 'vant';
import 'vant/lib/button/style';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(List)
Vue.use(Toast, {
    type: 'bottom',
    duration: 2000,
    wordWrap: true,
    width: '200px'
})
Vue.use(VueAxios, axios)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
