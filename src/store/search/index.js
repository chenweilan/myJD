import { reqGetSearchInfo } from "../../api"

const state={
    searchInfo:{}
}
const mutations={
    GETSEARCHINFO(state,searchInfo){
        state.searchInfo=searchInfo
    }
}
const actions={
    async getSearchList({commit},params){
        let result=await reqGetSearchInfo(params)
        commit("GETSEARCHINFO",result.data)
    }
}
const getters ={
    goodsList(state){
        return state.searchInfo.goodsList||[]
    },
    trademarkList(state){
        return state.searchInfo.trademarkList||[]
    },
    attrsList(state){
        return state.searchInfo.attrsList||[]
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}