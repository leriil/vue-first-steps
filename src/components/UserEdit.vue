<template>
 <div class="col-sm-3 block edit component">
 	<h3>Edit User details here</h3>
		<p>Edit Details</p>
		<button class="btn btn-success" @click="editAge">Edit Age</button>
		<p>User Age : {{userAge}}</p>
 </div>
</template>

<script>
	
	import {eventBus} from '../main';
export default {
 props:['userAge'],
 methods:{
 	editAge(){
 		this.userAge = 25;
 		// this.$emit('ageEdited', this.userAge);
 		// this will only pass data to the sibling which is listening to the event, not the parent
 		eventBus.$emit('ageEdited', this.userAge);
 	}
 }
  }

</script>


<style scoped>
div.edit{
	background-color: darkseagreen;
}
</style>
