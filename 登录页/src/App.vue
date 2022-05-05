<template>
	<div id="app">
		<poster></poster>
		<login></login>
	</div>
</template>

<script>
import login from "./components/login.vue";
import poster from "./components/poster.vue"
export default {
	name: "App",
	components: {
		login,
		poster
	},
	methods: {
	},
	data() {
		return {
		};
	},
};
</script>

<style>
</style>
