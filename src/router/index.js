import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Home from "../pages/Home"
import Search from "../pages/Search"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Detail from "../pages/Detail"
import AddCartSuccess from "../pages/AddCartSuccess"
import ShopCart from "../pages/ShopCart"
import Trade from "../pages/Trade"
import Pay from "../pages/Pay"
import PaySuccess from "../pages/PaySuccess"
import Center from "../pages/Center"
import GroupOrder from "../pages/Center/GroupOrder"
import MyOrder from "../pages/Center/MyOrder"
import store from "@/store"


let originPush = VueRouter.prototype.push
VueRouter.prototype.push=function(path,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,path,resolve,reject)
    }
    else{
        originPush.call(this,path,()=>{},()=>{})
    }
}

let router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                show:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/search/:keywords?',
            name:"Search",
            component:Search,
            meta:{
                show:true
            },
            props(route){
                let keywords={}
                if(route.params){
                    keywords=Object.assign(keywords,route.params)
                }
                if(route.query){
                    keywords=Object.assign(keywords,route.query)
                }
                return {"keywords":keywords}
            }
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:"/detail/:goodsID",
            name:"Detail",
            component:Detail
        },
        {
            path:"/addCartSuccess",
            name:"AddCartSuccess",
            component:AddCartSuccess,
            meta:{
                show:true
            }
        },
        {
            path:"/shopCart",
            name:"ShopCart",
            component:ShopCart,
            meta:{
                show:true
            }
        },
        {
            path:"/trade",
            name:"Trade",
            component:Trade,
            meta:{
                show:true,
                needLogin:true
            },
            beforeEnter(to,from,next){
                if(from.path=="/shopCart"){
                    next()
                }
                else{
                    next(false)
                }
            }
        },
        {
            path:"/pay",
            name:"Pay",
            component:Pay,
            meta:{
                show:true,
                needLogin:true
            },
            beforeEnter(to,from,next){
                if(from.path=="/trade"){
                    next()
                }
                else{
                    next(false)
                }
            }
        },
        {
            path:"/paySuccess",
            name:"PaySuccess",
            component:PaySuccess,
            meta:{
                show:true,
                needLogin:true
            },
            beforeEnter(to,from,next){
                if(from.path=="/pay"){
                    next()
                }
                else{
                    next(false)
                }
            }
        },
        {
            path:"/center",
            name:"Center",
            component:Center,
            redirect:"/center/myOrder",
            meta:{
                show:true,
                needLogin:true
            },
            children:[
                {
                    path:"myOrder",
                    name:"MyOrder",
                    component:MyOrder,
                    meta:{
                        needLogin:true
                    }
                },
                {
                    path:"groupOrder",
                    name:"GroupOrder",
                    component:GroupOrder,
                    meta:{
                        needLogin:true
                    }
                }
            ]
        },
        {
            path:"*",
            redirect:"/home"
        }
    ],
    scrollBehavior(to,from,savedPosition){
        return {top:0}
    }

})

router.beforeEach((to,from,next)=>{
    console.log("sss",to.path,to.meta.needLogin)
    if(!store.state.user.token && to.meta.needLogin){
        next('/login?targetPath='+to.path)
    }
    else{
        next()
    }
})

export default router