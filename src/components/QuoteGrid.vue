<template>
	<div class="row">
		<app-quote v-for="q in quotes" slot>{{q}}</app-quote>
	</div>
</template>
<script>
	import Quote from './Quote.vue';
	export default{
		props: ['quotes'],
		components:{
			appQuote:Quote
		}
	}
</script>
<style></style>