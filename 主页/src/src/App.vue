<template>
	<div id="app">
		<mainShow></mainShow>
		<rushPurchase></rushPurchase>
		<ebooksPart></ebooksPart>
		<recommend></recommend>
	</div>
</template>

<script>
import recommend from "./components/recommend.vue";
import rushPurchase from "./components/rush_purchase.vue";
import mainShow from "./components/mainShow.vue";
import ebooksPart from "./components/e-books_part.vue";
export default {
	name: "App",
	components: {
		ebooksPart,
		rushPurchase,
		recommend,
		mainShow
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
