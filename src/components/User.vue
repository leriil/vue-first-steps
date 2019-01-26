<template>
	<div class="container">
		<h1>The user component</h1>
		<p>You are an awesome User!</p>
		<button class="btn btn-success" @click="changeName">Change my name</button>
		<hr>
		<div class="row">
			<div class="col-sm-3"></div>
			<!-- single file template supports case sensitive attributes, so we can use myName here as well -->
			<app-user-detail ></app-user-detail>
			<app-user-edit></app-user-edit>
			<div class="col-sm-3"></div>
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
		text-align: center; 
	}
</style>