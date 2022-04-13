import Vue from "vue"

let MyPlugin ={}

MyPlugin.install=function(vue,options){
    Vue.directive(options.name,(element,params)=>{
        console.log("params",params)
        element.innerText=params.value.toUpperCase()
    })
}

export default MyPlugin