<template>
	<div id="poster">
		<img :src="src">
	</div>
</template>

<script>

export default {
	name:'poster',
	data() {
		return {
			src:'logo.png'
		}
	},
}
</script>

<style scoped>
#poster {
	width:500px;
	height:500px;
	display:block;
	border:1px solid black;
}
</style>
