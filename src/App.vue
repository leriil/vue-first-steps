<template>
  <div class="container">
    <div class="row">
        <app-quote>
          <!-- we can pass html code to the child -->
          <h1>The Quote</h1>
          <h2>{{quoteTitle}}</h2>
          <p>A beautiful quote</p>
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

</style>
