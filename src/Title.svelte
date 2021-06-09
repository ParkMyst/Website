<script>
	import { _ } from "svelte-i18n";
	import SmoothScroll from "./SmoothScroll.svelte";
	import marked from "marked";

	let html = $_("title.motto");
</script>

<div class="wrapper">
	<div class="title">
		<a id="Title" class="anchor" />
		<h1>ParkMyst</h1>
		<p>
			{@html marked(html)}
		</p>
		<div id="buttons">
			<SmoothScroll scrollTo="Discover">
				<span
					class="text-white bg-blue rounded-xl px-5 py-1 no-underline hover:bg-darkblue"
					>{$_("title.discover")}</span
				>
			</SmoothScroll>
			<SmoothScroll scrollTo="ContactUs">
				<span
					class="text-white bg-grey rounded-xl px-5 py-1 no-underline hover:bg-purple"
					>{$_("title.contactUs")}</span
				>
			</SmoothScroll>
		</div>
	</div>
	<div class="w-full h-screen flex items-center justify-center">
		<div>
			<a
				class="text-7xl text-white bg-blue rounded-2xl px-5 py-1 no-underline hover:bg-darkblue"
				href="https://play.parkmyst.hu">{$_("title.letsPlay")}</a
			>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

	:global(body) {
		font-family: 'Work Sans', sans-serif;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		background-image: url("/content/title_background.png");
		background-size: cover;
		background-repeat: no-repeat;
		background-position-x: right;
		background-attachment: fixed;
	}

	.title {
		display: flex;
		height: 100%;
		padding: 45px 10px 0 10px;
		flex-direction: column;
		justify-content: center;
		cursor: default;
	}

	.title h1 {
		font-size: 3rem;
		color: #0149b8;
		margin: 0;
	}

	.title p {
		margin: 30px 0;
	}

	.title p :global(span) {
		font-weight: bold;
	}

	.title div {
		display: flex;
		justify-content: center;
	}

	.title div :global(a) {
		padding: 0 25px;
	}

	.title div :global(a span) {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.1em;
		padding: 3px 10px;
	}

	.anchor {
		position: absolute;
		top: 0;
		left: 0;
	}

	@media only screen and (min-width: 768px) {
		.title {
			margin-left: 120px;
			padding: unset;
		}

		.title h1 {
			font-size: 6rem;
		}

		.title p {
			width: 400px;
			font-size: 1.4rem;
			margin: unset;
		}

		.title div {
			width: 400px;
			margin-top: 10px;
		}
	}

	@media only screen and (min-width: 1024px) {
		.wrapper {
			flex-direction: row;
			/* background-position-y: calc(100% + 60px); DISABLED UNTIL FIX */
		}
	}
</style>
