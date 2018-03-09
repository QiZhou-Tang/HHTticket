import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import VueAxios from 'vue-axios'



//Vue.prototype.$http = axios;    //将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$http使用


Vue.use(BootstrapVue,VueAxios, axios)
new Vue({
  el: '#app',
  render: h => h(App)
})
