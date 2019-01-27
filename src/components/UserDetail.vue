<template>
	<div class="col-sm-3 block component user">
		<h3>User Details</h3>
		<p>Many Details</p>
		<p>User Name: {{name}} </p>
		<p>User Age: {{userAge}} </p>
		<p>User reversed Name: {{reverseName()}} </p>
		<button class="btn btn-primary" @click="resetName()">Reset name</button>
		<!-- executing a parent function (a callback) -->
		<button class="btn btn-danger" @click="parentFn()">Reset name</button>
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
		default: 'Max'},
		// a parent function
		parentFn: Function,
		userAge: Number
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
	,
	// the property can be used in methods
	methods: {
		reverseName(){
			return this.name.split("").reverse().join("");
		},
		// this method passes the new value to the parent component
		// executing a custom event
		resetName(){
			this.name='Aurora';
			// event name, argument
			this.$emit('myEvent', this.name);
		}

	}
}
</script>
<style scoped>
div.user{


	background-color: lightcoral;
}
</style>