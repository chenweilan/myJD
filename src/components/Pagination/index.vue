<template>
  
        <div class="fr page">
          <div class="sui-pagination clearfix">
            <ul>
              <li class="prev" :class="{disabled:pageNo==1}" @click="changePage(pageNo-1)">
                <a>«上一页</a>
              </li>

              <li :class="{active:1==pageNo}" v-if="continuesNumber.start>1" @click="changePage(1)">
                <a>1</a>
              </li>

              <li class="dotted" v-if="continuesNumber.start>2"><span>...</span></li>

              <li :class="{active:number==pageNo}" v-for="number in continuesNumber.end" :key="number"  v-if="number>=continuesNumber.start" @click="changePage(number)">
                <a>{{number}}</a>
              </li>

              <li class="dotted" v-if="continuesNumber.end<totalPage-1"><span>...</span></li>

              <li :class="{active:totalPage==pageNo}" v-if="continuesNumber.end<totalPage" @click="changePage(totalPage)">
                <a>{{totalPage}}</a>
              </li>

              <li class="next" :class="{disabled:pageNo==totalPage}" @click="changePage(pageNo+1)">
                <a>下一页»</a>
              </li>
            </ul>
            <div><span>共{{totalPage}}页&nbsp;</span></div>
          </div>
        </div>
</template>

<script>
export default {
    name:"Pagination",
    props:["total","pageNo","continues","pageSize"],
    computed:{
        continuesNumber(){
            let start=0,end=0
            if(this.continues>this.totalPage){
                start=1
                end=this.totalPage
            }
            else{
                start=this.pageNo-parseInt(this.continues/2)
                end=this.pageNo+parseInt(this.continues/2)
                if(start<1){
                    start=1
                    end=this.continues
                }
                if(end>this.totalPage){
                    end=this.totalPage
                    start=this.totalPage-this.continues+1
                }
            }
            

            return {start,end}
        },
        totalPage(){
            return Math.ceil(this.total/this.pageSize)
        }
    },
    methods:{
        changePage(page){
            this.$emit('changePage',page)
        }
    }
}
</script>

<style scoped lang="less">
.page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        margin: 0 auto;
        .sui-pagination {
          margin: 18px 0;
          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            float: left;
            li {
              line-height: 18px;
              display: inline-block;
              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }
              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }
              &.prev {
                a {
                  background-color: #fafafa;
                }
              }
              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }
              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }
              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }
          div {
            color: #333;
            font-size: 14px;
            float: left;
            width: 241px;
            line-height: 41px;
            margin-left:30px;
          }
        }
      }
</style>