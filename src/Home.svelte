<script>
	import AboutUs from "./AboutUs.svelte";
	import Contact from "./Contact.svelte";
	import Discover from "./Discover.svelte";
	import Play from "./Play.svelte";
	import Title from "./Title.svelte";
</script>

<div class="home">
	<Title />
	<div class="container">
		<Discover />
		<AboutUs />
		<Contact />
		<Play />
	</div>
</div>

<style>
	.home {
		min-height: 100%;
		width: 100%;
	}

	.container {
		width: 100%;
	}
</style>
