<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Produtos Front</a>
      </div>
    </nav>
    <div class="container">
      <form>
          <label>Nome</label>
          <input type="text" placeholder="Nome">
          <label>Quantidade</label>
          <input type="number" placeholder="QTD">
          <label>Valor</label>
          <input type="text" placeholder="Valor">
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>
      </form>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>OPÇÕES</th>
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
        task:[]
      }
    },

  mounted(){
   tasks.listar()
   .then(response => {
     console.log(response.data)
     this.task = response.data;
    })
    }

}

</script>

<style>

</style>
