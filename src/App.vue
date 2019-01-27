<template>
  <div class="container">
    <div class="row">
        <app-quote>
          <!-- we can pass html code to the child -->
         <!--  <h1>The Quote</h1> -->
         <!-- we can use named slots to pass several html elements separately -->
          <h2 slot="title">{{quoteTitle}}</h2>
          <p slot="content">A beautiful quote</p>
          <!-- an unnamed slot is considered a default slot -->
          <p>Here goes unnamed slot</p>
        </app-quote>
    </div>
  </div>
</template>

<script>

 import Quote from './components/Quote.vue';
  export default {
    data: function(){
      return{
        quoteTitle: 'The Quote'
      }
    },
  components:{
    appQuote: Quote
  }

}
</script>

<style>
h1 {
  color: red;
}

</style>
