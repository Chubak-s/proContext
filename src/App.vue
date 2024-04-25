<script>
import VList from "@/components/v-list.vue";
import VListCard from "@/components/v-listCard.vue";
import store from "@/vuex/store.js";

export default {
  components: {
    VList,
    VListCard,
  },
  data(){
    return{
      lists: store.state.lists
    }
  },
  mounted() {
    for (let i=0; i<this.lists.length; i++){
      store.state.listsResult.push([])
    }
    console.log(store.state.listsResult)
  }
};
</script>

<template>
  <div class="App">
    <section class="left-section">
      <div v-for="list in lists">
        <VList :list="list"></VList>
      </div>
    </section>
    <section class="right-section">
      <div v-for="list in lists">
        <VListCard :list="list"></VListCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.App{
  height: 100%;
  width: 100%;
  font-size: 20px;
  font-family: sans-serif;
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 11%
}
section{
  border: 1px solid black;
  min-height: 95vh;
  width: 42%;
}
.left-section{
  padding: 54px 30px;
}
.right-section{
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
