<script>
	import { _ } from "svelte-i18n";
</script>

<div class="contact">
	<a id="ContactUs" />
	<h1>{$_("contact.contact")}</h1>
	<div class="textWrapper">
		<p>
			{$_("contact.p1")}
		</p>
		<p>
			{$_("contact.p2")}
		</p>
	</div>
</div>

<style>
	.contact {
		padding-bottom: 40px;
	}

	h1 {
		display: block;
		text-align: center;
		width: 100%;
		margin: 0;
		padding: 40px 15px;
		font-size: 2rem;
	}

	.textWrapper {
		padding: 0 10px;
	}

	@media only screen and (min-width: 768px) {
		h1 {
			font-size: 3rem;
			padding: 40px 0;
		}

		.textWrapper {
			max-width: 80vw;
			margin: auto;
			padding: unset;
		}
	}
</style>
