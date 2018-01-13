<template>
  <div class="container">
    <div class="title">
      <!-- <vue-typer text='TodoList!'></vue-typer> -->
      <h1>ToDoList</h1>
    </div>
    <p>
      <input type="text"
        placeholder="ENTERでTODO追加"
        v-model="newTodoTitle"
        v-on:keyup.enter="addTodo(newTodoTitle)">
    </p>
    <div class="todo" v-for="item in items">
      <div class="todo-list" 
        v-bind:class="{ complete: item.isChecked }"
        v-on:click="item.isChecked = !item.isChecked">
        <div class="todo-title">
            {{ item.title }}
        </div>
        <a class="btn"
          v-if="item.isChecked" 
          v-on:click="deleteTodo(item)" >Delete</a>
      </div>
    </div>
  </div>
</template>
<script>
import BaseHeader from './BaseHeader.vue'
// import VueSticker from 'vue-sticker'
import { VueTyper } from 'vue-typer'

export default {
  data () {
    return {
      msg: 'トップページだよ',
      items: [
        { title: '領収書を準備する', isChecked: true },
        { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
        { title: '参加者の人数を確認する', isChecked: false },
        { title: 'ピザを注文する', isChecked: false },
        { title: '参加費のお釣りを準備する', isChecked: false },
        { title: '会場設営をする', isChecked: false }
      ],
      newTodoTitle: ''
    }
  },
  components: {
    BaseHeader,
    // VueSticker,
    VueTyper
  },
  methods: {
    addTodo: function (newTodo) {
      this.items.push({
        title: newTodo,
        isChecked: false
      })
      this.newTodoTitle = ''
    },
    deleteTodo: function (item) {
      this.items.splice(this.items.indexOf(item), 1)
    }
  }
}
</script>
<style>
.container {
  text-align: center;
  width: 60%;
  border-radius: 15px;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 0 0 5px 0;
}
.todo {
  margin: 0 auto;
}
.todo-list {
  margin: 0 auto 35px auto;
  border-radius: 10px;
  border: 1px solid rgb(173, 255, 47);
  width: 70%;
}
.complete {
  background-color: rgb(173, 255, 47);
}
.title {
  font-size: 30px;
}
.todo-title {
  padding: 5px 0px;
}
.done {
  text-decoration: line-through;
}
.btn {
  background-color: rgb(255, 0, 0);
  color: rgb(173, 255, 47);
  width: 100px;
  text-align: center;
  line-height: 30px;
  margin: 0px auto 5px auto;
  border-radius: 5px;
  border: 3px solid rgb(255, 0, 0);
  display: block;
}
.btn:hover {
  background-color: rgb(173, 255, 47);
  color: red;
}
</style>