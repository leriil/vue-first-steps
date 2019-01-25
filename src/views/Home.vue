<!-- this is our component -->
<!-- it should contain exactly one root element -->
<template>
	<div>
		<friends v-for="f in 5"></friends>
	</div>

</template>

<script>
	import Friend from "../components/Friend.vue";
export default {
	components:{
		'friends': Friend
	}
}
</script>
