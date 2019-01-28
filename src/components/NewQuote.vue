<template>
	<div class="row">
		<form>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-12 col-md-offset-3 form-group">
				<label>Quote</label>
				<textarea class="form-control" name="" id="" cols="30" rows="3" v-model="quote"></textarea>
			</div>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-12 col-md-offset-3 form-group">
			<!-- prevent default behaviour, because we don't want to send the request to the server -->
				<button class="btn btn-primary"  @click.prevent="createNew"> Add Quote</button>
			</div>
	
		</form>
		
	</div>
	
</template>
<script>
	export default{
		data: function(){
			return{
				quote:''
			};
		},
		methods:{
			createNew(){
				this.$emit('quoteAdded', this.quote);
				this.quote='';
			}
		}
	}
</script>
<style>
/*	.panel-body{
		font-family: 'Arizonia', cursive;
		font-size: 24px;
		color: #6e6e6e;
	}
	.quote{
		cursor: pointer;
	}
	.quote:hover{
		background-color: #ffe2e2;
	}*/
</style>