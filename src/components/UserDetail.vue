<template>
	<div>
		<h3>User Details</h3>
		<p>Many Details</p>
		<p>User Name {{name}} </p>
	</div>
</template>

<script>
export default {
	// to receive data from parent
	props:['name']
}
</script>
<style scoped>
	div {
		background-color: lightcoral;
	}
</style>