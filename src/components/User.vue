<template>
	<div class="component">
		<h1>The user component</h1>
		<p>You are an awesome User!</p>
		<button @click="changeName">Change my name</button>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<!-- : makes the property dynamic -->
			<app-user-detail :name="name"></app-user-detail>
		</div>
		<div class="col-xs-12 col-sm-6">
			<app-user-edit></app-user-edit>
		</div>
		</div>
		
	</div>
	
</template>
<script>
	import UserDetail from './UserDetail.vue';
	import UserEdit from './UserEdit.vue';

	export default {
		data: function(){
			return {
				name:'Linda'
			};
		},
		methods: {
			changeName(){
				this.name = 'Anna';
			}
		},
		components: {
			appUserDetail: UserDetail,
			appUserEdit: UserEdit
		}
	}
</script>
<style scoped>
	div {
		background-color: lightblue; 
	}
</style>