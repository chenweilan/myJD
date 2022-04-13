import {requestCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from "@/api"

const state={
    code:"",
    token:localStorage.getItem("TOKEN"),
    userInfo:{}
}
const mutations={
    GETCODE(state,code){
        state.code=code
    },
    SETTOKEN(state,token){
        state.token=token
    },
    SETUSERINFO(state,data){
        state.userInfo=data
    }
}
const actions={
    async getCode({commit},phone){
        let result=await requestCode(phone)
        if(result.code==200){
            commit("GETCODE",result.data)
            return "ok"
        }
        else{
            return Promise.reject(new Error("fail"))
        }
    },

    async userRegister({commit},params){
        let result = await reqUserRegister(params)
        if(result.code==200){
            return "ok"
        }
        else{
            return Promise.reject(new Error(result.message))
        }
    },

    async userLogin({commit},params){
        let result=await reqUserLogin(params)
        if(result.code==200){
            commit("SETTOKEN",result.data.token)
            localStorage.setItem("TOKEN",result.data.token)
            return "ok"
        }
        else{
            return Promise.reject(new Error(result.message))
        }
    },

    async getUserInfo({commit}){
        let result=await reqUserInfo()
        if(result.code==200){
            commit("SETUSERINFO",result.data)
        }
    },

    async logout({commit}){
        let result=await reqLogout()
        if(result.code==200){
            commit("SETUSERINFO",{})
            commit("SETTOKEN","")
            localStorage.removeItem("TOKEN")
            return "ok"
        }
        else{
            return Promise.reject(new Error("fail"))
        }
    }
}
const getters={}

export default {
    state,
    mutations,
    actions,
    getters
}