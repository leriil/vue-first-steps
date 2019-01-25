<!-- this is our component -->
<!-- it should contain exactly one root element -->
<template>
	<div>
		<p>Another server status {{status}}</p>
		<hr>
		<button @click="changeStatus">ChangeStatus</button>
	</div>
	
</template>

<script>
export default {
	data: function(){
		return {
			status: 'Good'
		}
	},
	methods:{
		// ES6 syntax
		changeStatus(){
			this.status = 'Even better!'
		}
	}
}
</script>
