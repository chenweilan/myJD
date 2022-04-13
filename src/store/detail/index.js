import {reqGoodsInfo} from "../../api"
import { getUUID } from "@/utils/uuid_token"

const state ={
    goodsInfo:{},
    uuid_token:getUUID()
}

const mutations={
    GETGOODSINFO(state,info){
        state.goodsInfo=info
    }
}
const actions={
    async getGoodsInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code==200){
            commit("GETGOODSINFO",result.data)
        }
    }
}
const getters={
    categoryView(state){
        return state.goodsInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList||[]
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}