import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/base.css'
import List from 'vant';
import 'vant/lib/button/style';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(List)
Vue.use(Toast, {
    type: 'bottom',
    duration: 2000,
    wordWrap: true,
    width: '200px'
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
