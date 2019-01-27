<template>
	<div class=" col-md-12 quote">
<p>Pushkin</p>
	</div>
</template>
<script>
	export default{
		// this will be printed each time the component is closed
		destroyed(){
			console.log('Destroyed');
		},
		// lifecycle hooks we can use to control our components
		deactivated(){
			console.log('Deactivated');
		},
		activated(){
			console.log('Activated');
		}
	}
	
</script>

<style>

</style>