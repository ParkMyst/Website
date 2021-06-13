<script>
	import AboutUs from "./AboutUs.svelte";
	import Contact from "./Contact.svelte";
	import Discover from "./Discover.svelte";
	import NavBar from "./NavBar.svelte";
	import Play from "./Play.svelte";
	import Title from "./Title.svelte";
	import Gallery from "./Gallery.svelte";
</script>

<div class="w-full">
	<NavBar />
	<div class="w-full">
		<Title />
		<Gallery />
		<Discover />
		<AboutUs />
		<Contact />
		<Play />
	</div>
</div>
