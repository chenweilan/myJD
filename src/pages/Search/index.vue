!<template>
  <div>
      <Toolbar/>
      <TypeNav/>
      <Main :searchKey="searchKey"/>
  </div>
</template>

<script>
import Toolbar from "./Toolbar"
import Main from "./Main"

export default {
  name:"Search",
  components:{
    Toolbar,
    Main
  },
  computed:{
    searchKey(){
      let key=[]
      if(this.keywords.keywords){
         key.push(this.keywords.keywords)
      }
      if(this.keywords.categoryName){
         key.push(this.keywords.categoryName)
      }
      return key
    }
  },
  props:["keywords"]
}
</script>

<style>

</style>