<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Tasks Front</a>
      </div>
    </nav>
    <div class="container">
      <form @submit.prevent="save">
          <label>Name</label>
          <input type="text" placeholder="Name" v-model="todos.name">
          <label>Description</label>
          <input type="text" placeholder="description" v-model="todos.description">
          
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>
      </form>
      <button class="waves-effect waves-light btn-small" @click="teste(url)">google<i class="material-icons left">save</i></button>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>OPTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tasks of task" :key="tasks.id">
            <td>{{tasks.name}}</td>
            <td>{{tasks.description}}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import tasks from './services/task'
export default {
   
   
   data(){
      return{
        todos:{
          name:'',
          description:''
        },

        task:[],

        url:''
      }
    },

    teste: function (){
      console.log('teste click');
    },

  mounted(){
   tasks.listar()
   .then(response => {
     console.log(response.data)
     this.url = response.data;
    })
    },

    methods:{
      save(){
        tasks.salvar(this.todos).then(response => {
          console.log(response)
        })
      },
       teste (aa){
      window.open(aa, 'janela', 'width=795, height=590, top=100, left=10, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no')
    },

    }

}

</script>

<style>

</style>
