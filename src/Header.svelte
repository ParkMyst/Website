<script>
	import { _ } from 'svelte-i18n'
	import SmoothScroll from "./SmoothScroll.svelte";

	let currentHeight = 0;
	let transparent = true;

	$: transparent = currentHeight < 120;
</script>

<svelte:window bind:scrollY={currentHeight} />
<header class:solidHeader={!transparent}>
	<img src="parkmyst_logo.png" alt="parkmyst logo" />
	<nav>
		<SmoothScroll scrollTo="Discover">{$_("header.discover")}</SmoothScroll>
		<SmoothScroll scrollTo="AboutUs">{$_("header.aboutUs")}</SmoothScroll>
		<SmoothScroll scrollTo="ContactUs">{$_("header.contact")}</SmoothScroll>
		<SmoothScroll scrollTo="HowToPlay">{$_("header.play")}</SmoothScroll>
	</nav>
	<div>
		<a
			style="visible: {transparent
				? 'hidden'
				: 'visible'}; opacity: {transparent ? 0 : 1}"
			href="https://play.parkmyst.hu">{$_("header.login")}</a
		>
	</div>
</header>

<style>
	header {
		position: fixed;
		display: flex;
		left: 0;
		top: 0;
		width: 100%;
		padding: 0;
		z-index: 50;
		background: #f7f8fb;
	}

	header nav {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		padding: 7px 0;
	}

	.solidHeader {
		background: #f7f8fb;
		transition: 0.5s;
	}

	a {
		transition: 0.5s;
	}

	header img {
		display: none;
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

	header nav :global(a.active) {
		background: rgba(0, 0, 0, 0.4);
	}

	header div {
		display: none;
	}

	@media only screen and (min-width: 1024px) {
		header {
			height: 56px;
			background: rgba(0, 0, 0, 0);
			transition: 0.75s;
		}

		header nav {
			display: flex;
		}

		.solidHeader {
			background: #f7f8fb;
			transition: 0.5s;
		}

		header img {
			display: inline;
			padding: 6px 6px 6px 6px;
			width: 56px;
			height: 56px;
		}

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

		header nav :global(a.active) {
			background: rgba(0, 0, 0, 0.4);
		}

		header div {
			margin: 0 20px 0 auto;
			height: 56px;
			min-width: 50px;
			display: flex;
			align-items: center;
			transition: 0.5s;
		}

		header div :global(a) {
			display: inline-block;
			padding: 0 15px;
			background-color: #3385ff;
			border-radius: 30px;
			color: white;
			text-decoration: none;
			line-height: 30px;
		}

		header div :global(a:hover) {
			background-color: #0149b8;
		}
	}
</style>
