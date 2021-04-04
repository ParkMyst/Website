<script>
	import { _ } from "svelte-i18n";
	import SmoothScroll from "./SmoothScroll.svelte";

	let currentHeight = 0;
	let transparent = true;

	$: transparent = currentHeight < 120;
</script>

<svelte:window bind:scrollY={currentHeight} />
<header
	class:bg-opacity-100={!transparent}
	class="fixed flex left-0 top-0 w-full p-0 z-50 bg-white bg-opacity-0 transition-all md:h-14"
>
	<img
		src="parkmyst_logo.png"
		alt="parkmyst logo"
		class="hidden md:inline p-2 w-14 h-14"
	/>
	<nav class="flex justify-evenly w-full py-2 px-0 ">
		<SmoothScroll scrollTo="Discover">{$_("header.discover")}</SmoothScroll>
		<SmoothScroll scrollTo="AboutUs">{$_("header.aboutUs")}</SmoothScroll>
		<SmoothScroll scrollTo="ContactUs">{$_("header.contact")}</SmoothScroll>
		<SmoothScroll scrollTo="HowToPlay">{$_("header.play")}</SmoothScroll>
	</nav>
	<div
		class:md:pointer-events-auto={!transparent}
		class:md:opacity-100={!transparent}
		class="hidden pointer-events-none h-14 opacity-0 transition-opacity items-center md:flex"
	>
		<a
			class="text-white bg-blue rounded-xl px-5 py-1 no-underline hover:bg-darkblue"
			href="https://play.parkmyst.hu">{$_("header.login")}</a
		>
	</div>
</header>

<style>
	a {
		transition: 0.5s;
	}

	header nav :global(a) {
		text-align: center;
		background: rgba(255, 255, 255, 0);
		text-decoration: none;
		color: #000;
		will-change: background-color;
	}

	header nav :global(a:hover),
	header nav :global(a:active) {
		background: rgba(0, 0, 0, 0.2);
	}

	@media only screen and (min-width: 1024px) {
		header nav {
			font-size: 100%;
			justify-content: unset;
			padding: unset;
		}

		header nav :global(a) {
			display: inline-block;
			height: 56px;
			line-height: 56px;
			padding: 0 15px;
			min-width: 50px;
		}

		header nav :global(a.active) {
			background: rgba(0, 0, 0, 0.4);
		}

		header div {
			margin: 0 20px 0 auto;
			transition: 0.5s;
		}
	}
</style>
