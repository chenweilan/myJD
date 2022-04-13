!<template>
  <div>
      <TypeNav/>
      <ListContainer/>
      <TodayRecommand/>
      <Rank/>
      <Like/>
      <Floor/>
      <Floor/>
      <Brand/>
  </div>
</template>

<script>
import ListContainer from "./ListContainer"
import TodayRecommand from "./TodayRecommand"
import Rank from "./Rank"
import Like from "./Like"
import Floor from "./Floor"
import Brand from "./Brand"

export default {
    components:{
        ListContainer,
        TodayRecommand,
        Rank,
        Like,
        Floor,
        Brand
    }
}
</script>

<style>

</style>