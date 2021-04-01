<script>
	import { _ } from "svelte-i18n";
	import SmoothScroll from "./SmoothScroll.svelte";

	let html = $_("title.p_html")
</script>

<div class="wrapper">
	<div class="title">
		<a id="Title" class="anchor" />
		<h1>ParkMyst</h1>
		<p>
			{@html html}
		</p>
		<div id="buttons">
			<SmoothScroll scrollTo="Discover">
				<span class="roundButton">{$_("title.discover")}</span>
			</SmoothScroll>
			<SmoothScroll scrollTo="ContactUs">
				<span>{$_("title.contactUs")}</span>
			</SmoothScroll>
		</div>
	</div>
	<div class="playButtonWrapper">
		<div>
			<a href="https://play.parkmyst.hu">{$_("title.letsPlay")}</a>
		</div>
	</div>
</div>

<style>
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
		padding: 45px 10px 0 10px;
		flex-direction: column;
		justify-content: center;
	}

	.title h1 {
		font-size: 3rem;
		color: #0149b8;
		font-family: "Work Sans", Courier, monospace;
		margin: 0;
	}

	.title p {
		font-family: "Work Sans", Courier, monospace;
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

	.roundButton {
		background-color: #3385ff;
		border-radius: 30px;
		color: white;
	}

	.anchor {
		position: absolute;
		top: 0;
		left: 0;
	}

	.playButtonWrapper {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.playButtonWrapper div :global(a) {
		padding: 5px 45px;
		background-color: #3385ff;
		border-radius: 40px;
		color: white;
		text-decoration: none;
		font-size: 2rem;
		transition: 0.5s;
	}

	.playButtonWrapper div :global(a:hover) {
		background-color: #0149b8;
	}

	@media only screen and (min-width: 768px) {
		.title {
			height: 100vh;
			flex-direction: column;
			justify-content: center;
			margin-left: 120px;
			cursor: default;
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

		.playButtonWrapper div :global(a) {
			font-size: 4.5rem;
		}
	}

	@media only screen and (min-width: 1024px) {
		.wrapper {
			flex-direction: row;
			/* background-position-y: calc(100% + 60px); DISABLED UNTIL FIX */
		}

		.playButtonWrapper div a:hover {
			background-color: #0149b8;
		}
	}
</style>
