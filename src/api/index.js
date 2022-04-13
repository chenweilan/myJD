import requests from "./ajax";
import mockRequests from "./mockAjax";


// 三级联动接口
//  /api/product/getBaseCategoryList
export const reqBaseCategoryList =  function(){
    return requests({
        url:"/product/getBaseCategoryList",
        method:"get",
        
    })
}

export const reqBannerImgs= function(){
    return mockRequests({
        url:"/banner",
        method:"get",
    })
}

export const reqFloorData=function(){
    return mockRequests({
        url:"/floor",
        method:"get"
    })
}

export const reqGetSearchInfo=function(params){
    return requests({
        url:"/list",
        method:"post",
        data:params
    })
}

// /api/item/{ skuId }
export const reqGoodsInfo=function(skuId){
    return requests({
        url:`/item/${skuId}`,
        method:"get"
    })
}

// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart=function(skuId,skuNum){
    return requests({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:"post"
    })
}

export const reqCartList=function(){
    return requests({
        url:"/cart/cartList",
        method:"get"
    })
}

export const reqDeleteShopCart=function(skuId){
    return requests({
        url:`/cart/deleteCart/${skuId}`,
        method:"delete"
    })
}

export const reqUpdateCheckedById=function(skuId,isChecked){
    return requests({
        url:`/cart/checkCart/${skuId}/${isChecked}`,
        method:"get"
    })
}

export const requestCode=function(phone){
    return requests({
        url:`/user/passport/sendCode/${phone}`,
        method:"get"
    })
}

export const reqUserRegister=function(params){
    return requests({
        url:'/user/passport/register',
        method:"post",
        data:params
    })
}

export const reqUserLogin=function(params){
    return requests({
        url:"/user/passport/login",
        method:"post",
        data:params
    })
}

export const reqUserInfo=function(){
    return requests({
        url:"/user/passport/auth/getUserInfo",
        method:"get"
    })
}

export const reqLogout=function(){
    return requests({
        url:"/user/passport/logout",
        method:"get"
    })
}

export const reqOrderTradeInfo=function(){
    return requests({
        url:"/order/auth/trade",
        method:"get"
    })
}

export const reqSubmitOrder=function(params){
    return requests({
        url:"/order/auth/submitOrder?tradeNo="+params.tradeNo,
        method:"post",
        data:params
    })
}

export const reqGetOrderPayInfo=function(orderId){
    return requests({
        url:`/payment/weixin/createNative/${orderId}`,
        method:"get"
    })
}

export const reqPayStatus=function(orderId){
    return requests({
        url:`/payment/weixin/queryPayStatus/${orderId}`,
        method:"get"
    })
}

export const reqOrderList=function(page,limit){
    return requests({
        url:`/order/auth/${page}/${limit}`,
        method:"get"
    })
}