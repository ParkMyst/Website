<script>
	import { _ } from "svelte-i18n";
</script>

<div class="discover">
	<a id="Discover" />
	<h1 class="mainTitle">{$_("discover.title")}</h1>
	<div class="niceImage">
		<img src="/content/promo3.png" alt="promo" />
	</div>
	<div class="niceText">
		<h2>{$_("discover.whatWeDo.title")}</h2>
		<p>{$_("discover.whatWeDo.p")}</p>
	</div>

	<div class="niceText">
		<h2>{$_("discover.create.title")}</h2>
		<p>
			{$_("discover.create.p")}
		</p>
	</div>
	<div class="niceImage">
		<img src="http://via.placeholder.com/1920x1080" alt="Geri pls" />
	</div>
	<div class="niceImage">
		<img src="/content/promo4.png" alt="promo" />
	</div>
	<div class="niceText">
		<h2>{$_("discover.about.title")}</h2>
		<p>
			{$_("discover.about.p")}
		</p>
	</div>
</div>

<style>
	.discover {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding-bottom: 40px;
	}

	.mainTitle {
		display: block;
		text-align: center;
		width: 100%;
		margin: 0;
		padding: 40px 0;
		font-size: 2rem;
	}

	.niceImage {
		width: 40vw;
		min-width: 300px;
	}

	.niceImage img {
		width: 100%;
	}

	.niceText {
		width: 40vw;
		min-width: 300px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	@media only screen and (min-width: 768px) {
		.mainTitle {
			font-size: 3rem;
		}
	}
</style>
