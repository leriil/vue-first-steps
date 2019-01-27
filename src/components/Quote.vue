<template>
	<div class=" col-md-12 quote">
		<!-- a reserved word for recieving html code -->
		<slot name="title"></slot>
		<!-- the slot displays the subtitle if nothing is passed, when the slot with this name is passed, it replaces the default content -->
		<span style="color: #ccc"><slot name="subtitle">the subtitle</slot></span>
		<slot name="content"></slot>
		<!-- <p>A wonderful quote</p> -->
		<slot></slot>
	</div>
</template>
<script>
	
</script>

<style>
	div.quote {
	border: 1px solid #ccc;
	box-shadow: 1px 1px 2px black;
	padding: 30px;
	margin: 30px auto;
	text-align: center;
}
	

</style>