<!-- only one root element allowed! -->
<template>
  <div class="container component">
    <div class="row">
        <app-user></app-user>
    </div>
  </div>
</template>

<script>
  import User from './components/User.vue';
 
  export default {
    components:{
      appUser: User
    }
}
</script>

<style>
div.component {
  border: 1px solid black;
}
div.block {
    
    margin-left: 10px;
    margin-bottom: 10px; 
    margin-right: 10px;
  }
</style>
