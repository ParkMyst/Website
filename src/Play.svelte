<script>
	import { _ } from "svelte-i18n";
</script>

<div class="play">
	<a id="HowToPlay" />

	<div class="column">
		<img src="http://via.placeholder.com/360x360" alt="Geri pls" />
		<h1>{$_("play.fun.title")}</h1>
		<p>
			{$_("play.fun.p")}
		</p>
	</div>

	<div class="column">
		<img src="http://via.placeholder.com/360x360" alt="Geri pls" />
		<h1>{$_("play.customize.title")}</h1>
		<p>
			{$_("play.customize.p")}
		</p>
	</div>

	<div class="column">
		<img src="http://via.placeholder.com/360x360" alt="Geri pls" />
		<h1>{$_("play.fast.title")}</h1>
		<p>
			{$_("play.fast.p")}
		</p>
	</div>

	<div class="playContainer">
		<a href="https://play.parkmyst.hu">{$_("playNow")}</a>
	</div>
</div>

<style>
	.play {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		background-color: #d3dff0;
		padding: 40px 10px;
	}

	.column {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 30vw;
		min-width: 300px;
	}

	.column img {
		width: 70%;
	}

	.column h1 {
		margin: 0 0;
		font-size: 150%;
	}

	.column p {
		padding: 0 10px;
		margin: 0 0 20px 0;
	}

	.playContainer {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.playContainer a {
		height: 50px;
		width: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #3385ff;
		color: #fff;
		border-radius: 100px;
		font-size: 1rem;
		border: none;
		text-decoration: none;
	}

	@media only screen and (min-width: 1024px) {
		.column img {
			width: 30%;
		}
	}
</style>
