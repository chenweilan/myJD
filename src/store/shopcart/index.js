import { reqCartList, reqAddOrUpdateShopCart, reqDeleteShopCart, reqUpdateCheckedById } from "@/api"

const state={
    cartList:[]
}

const mutations={
    CARTINFOLIST(state,data){
        state.cartList=data
    }
}

const actions={
    async getCartList({commit}){
        let result=await reqCartList()
        if(result.code==200){
            commit("CARTINFOLIST",result.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code==200){
            return "ok"
        }
        else{
            return Promise.reject(new Error("fail"))
        }
    },
    async deleteShopCart({commit},skuId){
        let result = await reqDeleteShopCart(skuId)
        if(result.code==200){
            return "ok"
        }
        else{
            return Promise.reject(new Error("fail"))
        }
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked)
        if(result.code==200){
            return "ok"
        }
        else{
            return Promise.reject(new Error("fail"))
        }
    },
    updateAllCartChecked({dispatch,getters},isChecked){
        let promiseAll=[]
        getters.cartList.cartInfoList.forEach(element=>{
            let promise = dispatch("updateCheckedById",{skuId:element.skuId,isChecked:isChecked})
            promiseAll.push(promise)
        })

        return Promise.all(promiseAll)
    },
    deleteAllCheckedCart({dispatch,getters}){
        let promiseAll=[]
        getters.cartList.cartInfoList.forEach(element=>{
            if(element.isChecked==1){
                console.log("skuId",element.skuId)
                let p=dispatch("deleteShopCart",element.skuId)
                promiseAll.push(p)
            }   
        })
        return Promise.all(promiseAll)
    }

}

const getters={
    cartList(state){
        return state.cartList[0]||{}
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}