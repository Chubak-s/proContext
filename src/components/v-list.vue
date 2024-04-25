<script>
import dropdown from '../assets/dropdown.png'
import close from '../assets/close.png'
import VItem from "@/components/v-item.vue";
import store from "@/vuex/store.js";
export default {
  name: 'v-list',
  components:{
    VItem,
  },
  props:{
    list:{
      required: true,
      type: Object,
    }
  },
  data() {
    return {
      isOpen: false,
      items: store.state.items,
      dropdownIcon: dropdown,
      closeIcon: close,
      isChosen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    }
  },
  computed:{
    countItems(){
      if (store.state.listsResult.length>0){
        return store.state.listsResult[this.list.id-1].length
      }
      return 0
    }
  }

};
</script>

<template>
  <div class="title">
    <button @click="toggleDropdown" class="drop-btn"><img :src ="isOpen ? dropdownIcon : closeIcon" alt='button' class="icon"></button>
    <p class="box" v-if="countItems>0">■</p>
    <p class="box" v-else></p>
    {{list.name}}
  </div>
  <div v-show="isOpen" class="dropdown-content">
    <div v-for="item in list.items">
      <VItem :idList="this.list.id" :item="item"></VItem>
    </div>
  </div>
</template>

<style scoped>
.title{
  width: 300px;
  display: flex;
  align-items: center;
  column-gap: 20px;
  background-color: white;
  color: #181818;
}
.box{
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid #181818;
}
.drop-btn{
  border: none;
  background-color: white;
  cursor: pointer;
}
.dropdown-content {
  padding: 10px 80px;
  display: flex;
  flex-direction: column;
  gap:8px;
}
.icon{
  width: 10px;
}
</style>