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

        task:[]
      }
    },

  mounted(){
   tasks.listar()
   .then(response => {
     console.log(response.data)
     this.task = response.data;
    })
    },

    methods:{
      save(){
        tasks.salvar(this.todos).then(response => {
          console.log(response)
        })


      }
    }

}

</script>

<style>

</style>
