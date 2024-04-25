<script>
import VItem from "@/components/v-item.vue";
import store from "@/vuex/store.js";
import {createApp} from "vue";

export default {
  name: 'v-listCard',
  components: {VItem},
  props:{
    list:{
      required: true,
      type: Object,
    }
  },
  data() {
    return {
      isOpen: false,
      option: 'sort',
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      this.createContent()
    },
    createContent() {
      if (this.option==='sort'){
        const content = document.getElementById(`${this.list.id}dropdown-content`)
        content.innerHTML=''
        content.style.display = 'flex';
        content.style.flexDirection = 'column'
        content.style.gap = '10px';
        for (let item of store.state.listsResult[this.list.id-1]) {
          const divItem = document.createElement('div')
          divItem.style.display = 'flex';
          divItem.style.gap = '5px';
          divItem.style.width = '95%';
          divItem.style.flexWrap = 'wrap'
          for (let j=0; j<item.count; j++){
            const divColorBox = document.createElement('div')
            divColorBox.classList.add('colorBox')
            divColorBox.addEventListener('click', function() {
              console.log(this);
            });
            divColorBox.innerText='ㅤ'
            divColorBox.style.backgroundColor = item.color
            divColorBox.style.height = '15px'
            divColorBox.style.width = '15px'
            divItem.appendChild(divColorBox)
          }
          content.appendChild(divItem)
        }
      }
      else if(this.option === 'random'){
        const content = document.getElementById(`${this.list.id}dropdown-content`)
        content.innerHTML=''
        content.style.display = 'flex';
        content.style.flexDirection = 'row'
        let array = []
        for (let item of store.state.listsResult[this.list.id-1]) {
          for (let j=0; j<item.count; j++) {
            array.push(item.color)
          }
        }
        function shuffle(a, b) {
          return 0.5 - Math.random();
        }

// Перемешивание порядка элементов в массиве
        const shuffledArray =array.sort(shuffle);
        console.log(shuffledArray)
        for (let j=0; j<shuffledArray.length; j++){
            const divColorBox = document.createElement('div')
            divColorBox.innerText='ㅤ'
            divColorBox.style.backgroundColor = shuffledArray[j]
            divColorBox.style.height = '15px'
            divColorBox.style.width = '15px'
            content.appendChild(divColorBox)
        }
      }
    },
    sorting(){
      const el = document.getElementById(`${this.list.id}function`)
      console.log(this.option)
      if (this.option === 'random'){
        this.option = 'sort'
        el.innerText = 'Сортировать'
      }
      else{
        this.option = 'random'
        el.innerText = 'Перемешать'
      }
      this.createContent()
    }
  },
  mounted() {
  }
}
</script>
<template>
  <div class="list">
    <div class="title">
      <div @click="toggleDropdown" style="cursor: pointer">{{list.name}}</div>
      <div v-show="isOpen" class="function" @click="sorting" :id="`${list.id}function`">Перемешать</div>
    </div>
    <div v-show="isOpen" class="dropdown-content" :id="`${list.id}dropdown-content`">
    </div>
  </div>
</template>
<style scoped>
.list{
  min-height: 40px;
  width: 100%;
  border: 1px solid #181818;
}
.title{
  width: 95%;
  display: flex;
  padding: 5px 0 0 10px;
  justify-content: space-between;
}
.function{
  font-size: 14px;
  background-color: dodgerblue;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
.dropdown-content{
  display: flex;
  width: 100%;
  padding: 5px 10px 20px 10px;
}
</style>