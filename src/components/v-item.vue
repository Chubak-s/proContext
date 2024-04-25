<script>
import store from "@/vuex/store.js";

export default {
  name: 'v-item',
  props:{
    item:{
      required: true,
      type: Object,
    },
    idList:{
      required: true,
      type: Number,
    }
  },
  methods:{
    addToList(){
      const checkbox = document.getElementById(`${this.idList}${this.item.id+'check'}`)
      if (checkbox.checked){
        store.state.listsResult[this.idList-1].push(this.item)
        console.log(store.state.listsResult)
      }
      else {
        for (let i=0; i<store.state.listsResult[this.idList-1].length; i++){
          if (store.state.listsResult[this.idList-1][i].id === this.item.id){
            store.state.listsResult[this.idList-1].splice(i, 1)
          }
        }
      }
    }
  },
  mounted() {
    const numberInput = document.getElementById(`${this.idList}${this.item.id}number`);
    const colorInput = document.getElementById(`${this.idList}${this.item.id}color`);

    numberInput.addEventListener('input', () => {
      this.item.count = numberInput.value;
    });

    colorInput.addEventListener('change', () => {
      this.item.color = colorInput.value;
    });
  }
}
</script>
<template>
  <div class="item">
    <div class="col-part">
      <label class="checkbox-container">
        <input type="checkbox" @change="addToList()" :id="`${this.idList}${item.id}check`">
        <span class="checkmark"></span>
        <div class="name">{{ item.name }}</div>
      </label>
    </div>
    <div class="col-part">
      <input type="number" :value="item.count" :min="0" class="number" :id="`${this.idList}${item.id}number`">
      <input type="color" v-model="item.color" class="color" :id="`${this.idList}${item.id}color`">
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}

.checkbox-container {
  display: block;
  position: relative;
  padding-left: 30px;
  column-gap: 20px;
  cursor: pointer;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #fff;
  border: 1px solid black;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: white;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.col-part{
  display: flex;
}
.name{
  margin-left: 12px;
}
.number{
  font-size: 22px;
  width: 40px;
  background-color: transparent;
  border: none;
}
.color{
  width: 32px;
  height: 34px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>