<template>
	<div class="col-sm-3 block component user">
		<h3>User Details</h3>
		<p>Many Details</p>
		<p>User Name {{name}} </p>
		<p>User reversed Name {{reverseName()}} </p>
	</div>
</template>

<script>
export default {
	// to receive data from parent
	// props:['name'],
	props:{
		// name: String
		name: {
			type: String,
		// the component won't run without the property
		// required: true
		default: 'Max'}
		// in case type is Object
		// name:{
		// 	type: Object,
		// 	default: function(){
		// 		return {
		// 			name: 'Max'
		// 		}
		// 	}
		// 	}
		}
	},
	// the property can be used in methods
	methods: {
		reverseName(){
			return this.name.split("").reverse().join("");
		}
	}
}
</script>
<style scoped>
div.user{


	background-color: lightcoral;
}
</style>