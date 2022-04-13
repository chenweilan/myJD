import {reqOrderTradeInfo} from "@/api"

const state={
    orderTradeInfo:{}
}

const mutations={
    SETORDERTRADEINFO(state,data){
        state.orderTradeInfo=data
    }
}

const actions={
    async getOrderTradeInfo({commit}){
        let result=await reqOrderTradeInfo()
        if(result.code==200){
            commit("SETORDERTRADEINFO",result.data)
        }
    }
}

const getters={
    addressList(state){
        return state.orderTradeInfo.userAddressList||[]
    },
    detailArrayList(state){
        return state.orderTradeInfo.detailArrayList||[]
    },
    activityReduceAmount(state){
        return state.orderTradeInfo.activityReduceAmount
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}