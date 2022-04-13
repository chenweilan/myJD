import { reqBaseCategoryList, reqBannerImgs, reqFloorData } from "../../api"

const state={
    categoryList:[],
    bannerImgs:[],
    floorData:[]
}

const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    BANNERIMGS(state,bannerImgs){
        state.bannerImgs=bannerImgs
    },
    FLOORDATA(state,floorData){
        state.floorData=floorData
    }
}

const actions={
    async categoryList({commit}){
        let result=await reqBaseCategoryList()
        commit("CATEGORYLIST",result.data)
    },

    async bannerImgs({commit}){
        let result=await reqBannerImgs()
        commit("BANNERIMGS",result.data)
    },

    async floorData({commit}){
        let result=await reqFloorData()
        commit("FLOORDATA",result.data)
    }

}

const getters ={}

export default {
    state,
    mutations,
    actions,
    getters
}