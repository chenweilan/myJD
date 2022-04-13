import Vue from 'vue'
import store from "./store"
import App from './App.vue'
import router from "./router"
import "./assets/fonts/iconfont.css"

import TypeNav from "./components/TypeNav"
import Pagination from "./components/Pagination"

import "nprogress/nprogress.css"

import "swiper/css/swiper.css"

import "./mock/mockServer"

import {Button,MessageBox} from "element-ui"

import MyPlugin from "@/plugins/MyPlugin"

Vue.use(MyPlugin,{name:"upper"})

Vue.config.productionTip = false

Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)
//或者
//Vue.use(Button)

//另一种使用饿了么组件的方式
Vue.prototype.$msgbox=MessageBox
Vue.prototype.$alert=MessageBox.alert

new Vue({
  render: h => h(App),
  router,
  store,
  beforeMount(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
