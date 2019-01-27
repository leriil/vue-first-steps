<template>
  <div class="container">
    <div class="row">
       <button @click="selectedComponent='appQuote'">Quote</button>
      <button @click="selectedComponent='appAuthor'">Author</button>
      <button @click="selectedComponent='appBook'">Book</button>
      <!-- here we define the component to show -->
      <!-- the component is destroyed each time it's closed -->
      <component :is="selectedComponent">
        <p>Default Content</p>
      </component>
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
 import Author from './components/Author.vue';
 import Book from './components/Book.vue';
  export default {
    data: function(){
      return{
        quoteTitle: 'The Quote',
        selectedComponent: 'appQuote'
      }
    },
  components:{
    appQuote: Quote,
    appAuthor: Author,
    appBook: Book
  }

}
</script>

<style>
h1 {
  color: red;
}

</style>
