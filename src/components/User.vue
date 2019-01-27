<template>
	<div class="container">
		<h1>The user component</h1>
		<p>You are an awesome User!</p>
		<button class="btn btn-success" @click="changeName">Change my name</button>
		<p> Name is: {{ name }}</p>
		<p> Age is: {{ age }}</p>
		<hr>
		<div class="row">
			<div class="col-sm-3"></div>
			<!-- single file template supports case sensitive attributes, so we can use myName here as well -->
			<!-- listen to the event and get its argument-->
			<!-- we can pass functions as a prop -->
			<app-user-detail :name="name" :userAge="age" :parentFn="parentResetName" @myEvent="name = $event"></app-user-detail>
			<app-user-edit :userAge="age" @ageEdited="age=$event"></app-user-edit>
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
				name:'Linda',
				age: 30
			};
		},
		methods: {
			changeName(){
				this.name = 'Anna';
			},
			parentResetName(){
				this.name = 'Einstein';
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