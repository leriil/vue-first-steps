<template>
	<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 ">
		<div class="panel panel-default">
			<div class="panel-body quote">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script>
</script>
<style>
	.panel-body{
		font-family: 'Arizonia', cursive;
		font-size: 24px;
		color: #6e6e6e;
	}
	.quote{
		cursor: pointer;
	}
	.quote:hover{
		background-color: #ffe2e2;
	}
</style>