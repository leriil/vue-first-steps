<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote" ></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col sm-12 text-center">
        <div class="alert alert-info">Click on a quote to delete it</div>
      </div>
    </div>



    <app-table></app-table>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import QuoteGrid from './components/QuoteGrid.vue';
  import NewQuote from './components/NewQuote.vue';
  import Table from './components/Table.vue';
  export default {
    data:
      function(){
        return {
          maxQuotes: 10,
          quotes: ['First quote']
        }
      },
    components:{
      appHeader: Header,
      appQuoteGrid:QuoteGrid,
      appNewQuote: NewQuote,
      appTable: Table
    },
    methods:{
      newQuote(quote){
        if(this.quotes.length>=this.maxQuotes){
            return alert('The quote table is full!');
        }
        this.quotes.push(quote);
        console.log('number of quotes: '+ this.quotes.length);
      },
      deleteQuote(index){
        this.quotes.splice(index,1);
      }
    }
}
</script>

<style>

</style>
