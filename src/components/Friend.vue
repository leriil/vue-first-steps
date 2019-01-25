<template>
	<div>
		<p>My good friend {{name}}</p>
		<hr>
		<button @click="changeStatus">ChangeStatus</button>
	</div>

</template>

<script>
export default {
	data: function(){
		return {
			name: 'Lucy'
		}
	},
	methods:{
		// ES6 syntax
		changeStatus(){
			this.name = 'Peter'
		}
	}
}
</script>
